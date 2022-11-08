import { useTheme } from 'styled-components/native';
import { Linking } from 'react-native';
import { Container, Subtitle, Title, Link } from './styles';
import { EnvelopeSimple, InstagramLogo } from 'phosphor-react-native';

export function BannerInstagram() {
  const theme = useTheme()
  return (
    <Container>
      <Title>Nos acompanhe também em...</Title>
      <Link onPress={() => Linking.openURL('https://www.instagram.com/decideai_oficial')} >
        <InstagramLogo size={32} weight="fill" color={theme.COLORS.ICONS} />
        <Subtitle>@decideai_oficial</Subtitle>
      </Link>
      <Link onPress={() => Linking.openURL('mailto:suporte@decideai.com.br')} >
        <EnvelopeSimple size={32} weight="fill" color={theme.COLORS.ICONS} />
        <Subtitle>suporte@decideai.com.br</Subtitle>
      </Link>
    </Container>
  );
}