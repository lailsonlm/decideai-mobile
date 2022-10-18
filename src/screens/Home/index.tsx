import { ListRenderItem, View } from 'react-native';
import { useTheme } from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { useFonts, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts as useFontsSuez, SuezOne_400Regular } from '@expo-google-fonts/suez-one';
import { Coffee, Confetti, Cookie, ForkKnife, Martini } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { CategoriesListMain } from '../../components/CategoriesListMain';

import { Container, ViewIntro, Heading, InstructionText, ImgBackground, MainTitle, FlatListCategories, FlatListCompanies, AlertError, ButtonViewMore } from './styles';
import ImgBg from '../../assets/img_bg.png'
import { useState } from 'react';
import { Card } from '../../components/Card';
import { InfoCard } from '../../components/InfoCard';

const GET_MAIN_COMPANIES_BY_CATEGORY = gql`
  query GET_MAIN_COMPANIES_BY_CATEGORY {
    categories {
      id
      title
      slug
      companies(first: 8, orderBy: updatedAt_DESC) {
        id
        slug
        name
        cover {
          url
        }
      }
    }
    companiesConnection {
      aggregate {
        count
      }
    }
  }
`;

interface MainCompaniesQuery {
  categories: {
    companies: {
      id: string;
      cover: {
        url: string
      };
      name: string;
      slug: string;
    }[],
    id: string;
    slug: string;
    title: string;
  }[],
  companiesConnection: {
    aggregate: {
      count: number
    }
  }
}

export interface CategoriesListType {
  id: string;
  title: string;
  icon: JSX.Element;
  iconSelected: JSX.Element;
}

export function Home() {
  const theme = useTheme()
  const [isFontsLoaded] = useFonts({ Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })
  const [isFontSuezLoaded] = useFontsSuez({ SuezOne_400Regular })

  const [selectedCategory, setSelectedCategory] = useState('Restaurantes')

  const selectedCategoryInEnglish = selectedCategory === 'Restaurantes' ? 'restaurants' : selectedCategory === 'Cafeterias' ? 'coffee-shops' : selectedCategory === 'Bares' ? 'bars' : selectedCategory === 'Docerias' ? 'candy-stores' : 'entertainment'
  
  function handleSelectCategory(category: string) {
    setSelectedCategory(category)
  }

  const { data, loading, fetchMore, error } = useQuery<MainCompaniesQuery>(GET_MAIN_COMPANIES_BY_CATEGORY)

  const restaurants = data?.categories.find(category => category.slug === selectedCategoryInEnglish)?.companies.map(company => company)

  const categoriesList = [
    {
      id: '1',
      title: 'Restaurantes',
      icon: <ForkKnife size={24} weight='fill' color={theme.COLORS.TEXT_PRIMARY} />,
      iconSelected: <ForkKnife size={24} weight='fill' color={theme.COLORS.TEXT_HIGHLIGHT} />
    },
    {
      id: '2',
      title: 'Bares',
      icon: <Martini size={24} weight='fill' color={theme.COLORS.TEXT_PRIMARY} />,
      iconSelected: <Martini size={24} weight='fill' color={theme.COLORS.TEXT_HIGHLIGHT} />
    },
    {
      id: '3',
      title: 'Cafeterias',
      icon: <Coffee size={24} weight='fill' color={theme.COLORS.TEXT_PRIMARY} />,
      iconSelected: <Coffee size={24} weight='fill' color={theme.COLORS.TEXT_HIGHLIGHT} />
    },
    {
      id: '4',
      title: 'Docerias',
      icon: <Cookie size={24} weight='fill' color={theme.COLORS.TEXT_PRIMARY} />,
      iconSelected: <Cookie size={24} weight='fill' color={theme.COLORS.TEXT_HIGHLIGHT} />
    },
    {
      id: '5',
      title: 'Entretenimento',
      icon: <Confetti size={24} weight='fill' color={theme.COLORS.TEXT_PRIMARY} />,
      iconSelected: <Confetti size={24} weight='fill' color={theme.COLORS.TEXT_HIGHLIGHT} />
    },
  ];

  const renderItem: ListRenderItem<CategoriesListType> = ({item}) => <CategoriesListMain data={item} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />

  if(!isFontSuezLoaded || !isFontsLoaded || loading) {
    return <Loading /> 
  }

  return (
    <Container >
      <FlatListCompanies
      data={restaurants}
      keyExtractor={item => item.id} 
      numColumns={2}
      renderItem= {({item}) => (
        <View style={{ flex: 1, padding: 8 }}>
          <Card cover={item.cover} name={item.name} key={item.id}/>
        </View>
      )}

        ListHeaderComponent={() => (
          <>
          <Header />
          <ViewIntro>
            <Heading>
              O que você procura está aqui, quem decide é você!
            </Heading>
            <InstructionText>
              Selecione a categoria e encontre as melhores opções de lugares e estabelecimentos para você conhecer.
            </InstructionText>
            <ImgBackground 
              source={ImgBg}
            />
          </ViewIntro>

          <MainTitle>Principais categorias</MainTitle>
      
          <FlatListCategories
            data={categoriesList} 
            keyExtractor={(item: CategoriesListType) => item.id} 
            renderItem={renderItem} 
            horizontal
            contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
          />

          {error &&
            <AlertError>Erro ao buscar dados, tente novamente!</AlertError>
          }
          </>
        )}
        ListFooterComponent={() => (
          <>
          <ButtonViewMore>Ver tudo</ButtonViewMore>
          <InfoCard totalCategories={data?.categories.length || 0} totalCompanies={data?.companiesConnection.aggregate.count || 0} />
          </>

        )}
      />

    </Container>
  )
}