import { ListChecks, MapTrifold, Storefront } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { Container, ViewGroup, ViewGroupDescription, Count, Title } from './styles';

interface InfoCardProps {
  totalCategories: number;
  totalCompanies: number;
}

export function InfoCard({ totalCategories, totalCompanies }: InfoCardProps) {
  const theme = useTheme()
  return (
    <Container>
      <ViewGroup>
        <Storefront size={64} weight='fill' color={theme.COLORS.BACKGROUND_HIGHLIGHT} />
        <ViewGroupDescription>
          <Count>{totalCompanies}</Count>
          <Title>Estabelecimentos</Title>
        </ViewGroupDescription>
      </ViewGroup>
      <ViewGroup>
        <ListChecks size={64} weight='fill' color={theme.COLORS.BACKGROUND_HIGHLIGHT} />
        <ViewGroupDescription>
          <Count>{totalCategories}</Count>
          <Title>Categorias</Title>
        </ViewGroupDescription>
      </ViewGroup>
      <ViewGroup>
        <MapTrifold size={64} weight='fill' color={theme.COLORS.BACKGROUND_HIGHLIGHT} />
        <ViewGroupDescription>
          <Count>3</Count>
          <Title>Cidades</Title>
        </ViewGroupDescription>
      </ViewGroup>
    </Container>
  );
}