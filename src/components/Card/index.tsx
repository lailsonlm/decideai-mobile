import { useNavigation } from '@react-navigation/native';
import { MotiView } from 'moti';
import { Container, CoverView, ImageCover, NameCard } from './styles';

interface CardProps {
  cover: {
    url: string;
  }
  name: string;
  slug: string;
}

export function Card({ cover, name, slug }: CardProps) {
  const navigation = useNavigation()

  function handleOpenCompany(slug: string) {
    navigation.navigate('company', {slug})
  }

  return (
    <MotiView
      style={{flex: 1}}
      from={{
        opacity: 0,
        translateY: 5
      }}
      animate={{
        opacity: 1,
        translateY: 0
      }}
      transition={{
        type: 'timing',
        duration: 500,
        delay: 500,
        translateY: {
          type: 'spring',
        }
      }}
    >
    <Container onPress={() => handleOpenCompany(slug)}>
      <CoverView>
        <ImageCover source={{
          uri: cover.url
        }}/>
        <NameCard>{name}</NameCard>
      </CoverView>
    </Container>
    </MotiView>
  );
}