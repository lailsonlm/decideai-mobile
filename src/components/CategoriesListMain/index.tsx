import { Container, ContainerSelected, Title, TitleSelected } from './styles';

interface CategoriesListMainProps {
  data: {
    id: string;
    title: string;
    icon: JSX.Element;
    iconSelected: JSX.Element;
  };
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export function CategoriesListMain({ data, onSelectCategory, selectedCategory }: CategoriesListMainProps) {
  return (
    selectedCategory !== data.title ? 
      <Container onPress={() => onSelectCategory(data.title)}>
        {data.icon}
        <Title>{data.title}</Title>
      </Container>
    : 
      <ContainerSelected onPress={() => onSelectCategory(data.title)}>
        {data.iconSelected}
        <TitleSelected>{data.title}</TitleSelected>
      </ContainerSelected>
  );
}
