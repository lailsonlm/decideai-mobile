import { useState } from 'react';
import { View } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from 'styled-components/native';

import { FlatListCompanies } from '../../components/FlatListCompanies';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { MotiView } from 'moti';
import { TitleCategory } from '../../components/TitleCategory';

import { Container, ViewTitleCategory, AlertError } from './styles';

const GET_COMPANIES_BY_CATEGORY_AND_LOCALITY_QUERY = gql`
  query GET_COMPANIES_BY_CATEGORY_AND_LOCALITY_QUERY($slug: String!, $city: [City] = [Olinda, Paulista, Recife], $cursor: String) {
    categories(where: {slug: $slug}) {
      slug
    }
    companiesConnection(
      orderBy: name_ASC
      where: {locality: {city_in: $city}, categories_some: {slug: $slug}}
      first: 50,
      after: $cursor,
    ) {
      edges {
        node {
          id
          name
          slug
          cover {
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
    }
  }
`

interface GetCompanies {
  categories: {
    slug: string;
  }[];
  companiesConnection: {
    edges: {
      node: {
        id: string;
        name: string;
        slug: string;
        cover: {
          url: string;
        }
      }
    }[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      pageSize: number;
      startCursor: string;
      endCursor: string;
    }
  }

}

interface RouteParams {
  slug: string;
}

export interface CompaniesListType {
  id: string;
  cover: {
    url: string;
  };
  name: string;
  slug: string;
}

export function Category() {
  const route = useRoute()
  const theme = useTheme()
  const [citySelected, setCitySelected] = useState("All")
  const { slug } = route.params as RouteParams

  const city = citySelected === "All" ? undefined : [citySelected]

  const { data, loading, fetchMore, error } = useQuery<GetCompanies>(GET_COMPANIES_BY_CATEGORY_AND_LOCALITY_QUERY, {
    variables: {
      city,
      slug,
    },
  })

  if(!data) {
    return (
      <Loading />
    )
  }

  const companies = data?.companiesConnection.edges.map(company => {
    const companyInfo = company.node
    return companyInfo
  })

  const pageInfo = data?.companiesConnection.pageInfo

  function getMoreCompanies() {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          cursor: pageInfo.endCursor,
        },
      });
    }
  }

  return (
    <Container>
      <Header />
      <ViewTitleCategory>
        <MotiView
          from={{
            opacity: 0,
            translateX: -5
          }}
          animate={{
            opacity: 1,
            translateX: 0
          }}
          transition={{
            type: 'timing',
            duration: 1000,
            delay: 500,
            translateX: {
              type: 'spring',
            }
          }}
        >
          <TitleCategory slug={slug} />
        </MotiView>
      </ViewTitleCategory>

      <Picker
        selectedValue={citySelected}
        onValueChange={(itemValue, itemIndex) =>
          setCitySelected(itemValue)
        }
        style={{backgroundColor: theme.COLORS.TEXT_INSTRUCTION, borderRadius: 8, marginTop: 8, marginBottom: 8,  marginLeft: 200, marginRight: 8}}
      >
        <Picker.Item label="Todas as cidades" value="All" />
        <Picker.Item label="Olinda" value="Olinda" />
        <Picker.Item label="Paulista" value="Paulista" />
        <Picker.Item label="Recife" value="Recife" />
      </Picker>

      {error &&
        <AlertError>Erro ao buscar dados, tente novamente!</AlertError>
      }
      <FlatListCompanies
        companies={companies}
        onEndReached={getMoreCompanies}
        onEndReachedThreshould={0.1}
        ListFooterComponent={(
          <View style={{padding: 24}}>
           {pageInfo.hasNextPage && <Loading />} 
          </View>
        )}
      />

    </Container>
  );
}