import { Container, CoverView, ImageCover, NameCard } from './styles';

interface CardProps {
  cover: {
    url: string;
  }
  name: string;
}

export function Card({ cover, name }: CardProps) {
  return (
    <Container>
      <CoverView>
        <ImageCover source={{
          uri: cover.url
        }}/>
        <NameCard>{name}</NameCard>
      </CoverView>
    </Container>
  );
}