import { Image, Linking } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, WhatsappLogo, InstagramLogo, FacebookLogo } from 'phosphor-react-native';
import { MotiView } from 'moti';
import { useTheme } from 'styled-components/native';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { TitleCategory } from '../../components/TitleCategory';

import { Container, ViewTitleCategory, ButtonGoBack, CompanyName, Main, CompanyDescription, CompanyAdress, CompanyAdressType, CompanyAdressContent, SocialMedia, Link } from './styles';

const GET_COMPANY_QUERY = gql`
  query GET_COMPANY_QUERY($slugCompany: String!) {
  company(where: {slug: $slugCompany}) {
    name
    id
    description
    adress
    numberAdress
    locality {
      city
    }
    district
    cover {
      url
    }
    categories {
      slug
    }
    whatsapp
    facebookUrl
    instagramUrl
  }
}
`
interface CompanyProps {
  company: {
    id: string;
    name: string;
    adress: string;
    description: string;
    district: string;
    numberAdress: string;
    cover: {
      url: string;
    }
    categories: {
      slug: string;
    }[]
    locality: {
      city: string;
    }
    whatsapp: string;
    facebookUrl: string;
    instagramUrl: string;
  }
}

interface RouteParams {
  slug: string;
}

export function Company() {
  const route = useRoute()
  const navigation = useNavigation()
  const theme = useTheme()
  const { slug }  = route.params as RouteParams

  const { data, loading, error } = useQuery<CompanyProps>(GET_COMPANY_QUERY, {
    variables: {
      slugCompany: slug,
    },
  })

  if(!data) {
    return (
      <Loading />
    )
  }

  return (
    <Container>
      <Header />
      <ViewTitleCategory>
        <MotiView
          style={{ flexDirection: 'row', alignItems: 'center' }}
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
          <ButtonGoBack onPress={() => navigation.goBack()}>
            <ArrowLeft color={theme.COLORS.TEXT_PRIMARY} />
          </ButtonGoBack>
          <TitleCategory slug={data.company.categories[0].slug} />
        </MotiView>
      </ViewTitleCategory>

      <Main>
        <MotiView
          from={{
            opacity: 0,
            translateY: -50
          }}
          animate={{
            opacity: 1,
            translateY: 0
          }}
          transition={{
            type: 'timing',
            duration: 1000,
            delay: 1000,
            translateY: {
              type: 'spring',
            }
          }}
        >
          <CompanyName>{data.company.name}</CompanyName>
          <Image source={{ uri: data.company.cover.url }} style={{ width: 500, maxWidth: '100%', height: 184, marginTop: 8 }} />
          <CompanyDescription>{data.company.description}</CompanyDescription>

          <CompanyAdress>
          <CompanyAdressContent>
            <CompanyAdressType>Endereço: </CompanyAdressType>
            {data.company.adress}
          </CompanyAdressContent>

          <CompanyAdressContent>
            <CompanyAdressType>Cidade: </CompanyAdressType>
            {data.company.locality.city}
          </CompanyAdressContent>

          <CompanyAdressContent>
            <CompanyAdressType>Bairro: </CompanyAdressType>
            {data.company.district}
          </CompanyAdressContent>
          </CompanyAdress>

          <SocialMedia>
            {data.company.whatsapp &&
              <Link onPress={() => Linking.openURL(`https://wa.me/55${data.company.whatsapp}`)} >
                <WhatsappLogo size={32} weight="fill" color={theme.COLORS.ICONS}  />
              </Link>
            }

            {data.company.instagramUrl &&
              <Link onPress={() => Linking.openURL(data.company.instagramUrl)} >
                <InstagramLogo size={32} weight="fill" color={theme.COLORS.ICONS}   />
              </Link>
            }

            {data.company.facebookUrl &&
              <Link onPress={() => Linking.openURL(data.company.facebookUrl)} >
                <FacebookLogo size={32} weight="fill" color={theme.COLORS.ICONS}   />
              </Link>
            }
          </SocialMedia>
        </MotiView>
      </Main>
    </Container>
  );
}