import { ForkKnife, Martini, Coffee, Cookie , Confetti } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native';
import { Container, Title } from './styles';

interface TitleCategoryProps {
  slug: string;
}

export function TitleCategory({ slug }: TitleCategoryProps) {
  const theme = useTheme()
  return (
    slug === "restaurants" ?
    <Container>           
      <ForkKnife 
        size={24} 
        weight="fill"
        color={theme.COLORS.BACKGROUND_HIGHLIGHT}
      />
      <Title>Restaurantes</Title>
    </Container>

    : slug === "bars" ? 
    <Container>           
      <Martini 
        size={24} 
        weight="fill"
        color={theme.COLORS.BACKGROUND_HIGHLIGHT}
      />
      <Title>Bares</Title>
    </Container>

    :  slug === "coffee-shops" ? 
    <Container>           
      <Coffee 
        size={24} 
        weight="fill"
        color={theme.COLORS.BACKGROUND_HIGHLIGHT}
      />
      <Title>Cafeterias</Title>
    </Container>

    :  slug === "candy-stores" ? 
    <Container>           
      <Cookie 
        size={24} 
        weight="fill"
        color={theme.COLORS.BACKGROUND_HIGHLIGHT}
      />
      <Title>Docerias</Title>
    </Container>
    : 
    <Container>           
      <Confetti 
        size={24} 
        weight="fill"
        color={theme.COLORS.BACKGROUND_HIGHLIGHT}
      />
      <Title>Entretenimento</Title>
    </Container>
  );
}