import { ListRenderItem } from 'react-native';
import { useTheme } from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { MotiView, MotiImage } from 'moti';
import { Coffee, Confetti, Cookie, ForkKnife, Martini } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { CategoriesListMain } from '../../components/CategoriesListMain';
import { FlatListCompanies } from '../../components/FlatListCompanies';

import { Container, ViewIntro, Heading, InstructionText, ImgBackground, MainTitle, FlatListCategories, AlertError, ButtonViewMore, ButtonText } from './styles';
import ImgBg from '../../assets/img_bg.png'
import { useState } from 'react';
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
  const navigation = useNavigation()
  const [selectedCategory, setSelectedCategory] = useState('Restaurantes')

  const selectedCategoryInEnglish = selectedCategory === 'Restaurantes' ? 'restaurants' : selectedCategory === 'Cafeterias' ? 'coffee-shops' : selectedCategory === 'Bares' ? 'bars' : selectedCategory === 'Docerias' ? 'candy-stores' : 'entertainment'
  
  function handleSelectCategory(category: string) {
    setSelectedCategory(category)
  }
  
  function handleOpenCategory(slug: string) {
    navigation.navigate(slug as any)
  }

  const { data, loading, error } = useQuery<MainCompaniesQuery>(GET_MAIN_COMPANIES_BY_CATEGORY)
  const companies = data?.categories.find(category => category.slug === selectedCategoryInEnglish)?.companies.map(company => company)

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

  const renderItemCategories: ListRenderItem<CategoriesListType> = ({item}) => <CategoriesListMain data={item} onSelectCategory={handleSelectCategory} selectedCategory={selectedCategory} />

  if(loading) {
    return <Loading /> 
  }

  return (
    <Container >
      <FlatListCompanies
        companies={companies}
        ListHeaderComponent={(
          <>
          <Header />
          <ViewIntro>
            <MotiView
              from={{
                opacity: 0,
                translateX: 5
              }}
              animate={{
                opacity: 1,
                translateX: 0
              }}
              transition={{
                type: 'timing',
                duration: 3000,
                translateX: {
                  type: 'spring',
                }
              }}
            >
              <Heading>
                O que você procura está aqui, quem decide é você!
              </Heading>
            </MotiView>
            <MotiView
               from={{
                opacity: 0,
                translateY: 5
              }}
              animate={{
                opacity: 1,
                translateX: 0
              }}
              transition={{
                type: 'timing',
                duration: 3000,
                translateX: {
                  type: 'spring',
                  delay: 1000
                }
              }}
            >
              <InstructionText>
                Selecione a categoria e encontre as melhores opções de lugares e estabelecimentos para você conhecer.
              </InstructionText>
            </MotiView>
            <MotiImage 
              style={{ marginTop: 16, marginLeft: 24 }}
              source={ImgBg}
              from={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                type: 'timing',
                duration: 1000
              }}
            />
          </ViewIntro>

          <MainTitle>Principais categorias</MainTitle>
          <MotiView
            from={{
              opacity: 0,
              translateX: 50
            }}
            animate={{
              opacity: 1,
              translateX: 0
            }}
            transition={{
              type: 'timing',
              duration: 1000,
              delay: 1000,
              translateX: {
                type: 'spring',
              }
            }}
          >
            <FlatListCategories
              data={categoriesList} 
              keyExtractor={(item: CategoriesListType) => item.id} 
              renderItem={renderItemCategories} 
              horizontal
              contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
              showsHorizontalScrollIndicator={false}
            />
          </MotiView>

          {error &&
            <AlertError>Erro ao buscar dados, tente novamente!</AlertError>
          }
          </>
        )}
        ListFooterComponent={(
          <>
          <ButtonViewMore
            onPress={() => handleOpenCategory(selectedCategoryInEnglish)} 
          >
            <ButtonText>Ver tudo</ButtonText>
          </ButtonViewMore>
          
          <InfoCard totalCategories={data?.categories.length || 0} totalCompanies={data?.companiesConnection.aggregate.count || 0} />
          </>

        )}
      />

    </Container>
  )
}