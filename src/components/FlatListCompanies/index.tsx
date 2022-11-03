import React from 'react';
import { ListRenderItem, View } from 'react-native';
import { Card } from '../Card';
import { Container } from './styles';

export interface CompaniesListType {
  id: string;
  cover: {
    url: string;
  };
  name: string;
  slug: string;
}


interface FlatListCompaniesProps {
  companies: CompaniesListType[] | undefined;
  ListHeaderComponent?: JSX.Element;
  ListFooterComponent?: JSX.Element;
  onEndReached?: ((info: {distanceFromEnd: number}) => void) | null | undefined;
  onEndReachedThreshould?: number;
}

export function FlatListCompanies({ companies, ListHeaderComponent, ListFooterComponent, onEndReached, onEndReachedThreshould }: FlatListCompaniesProps) {
  const columns = 2;

  const renderItemCompanies: ListRenderItem<CompaniesListType> = ({item}) => (
    <View style={{ flex: 0.5}}>
      <View style={{ flex: 1, padding: 8 }}>
        <Card cover={item.cover} name={item.name} slug={item.slug}/>
      </View>
    </View> 
  )

  return (
    <Container 
      data={companies}
      keyExtractor={(item: CompaniesListType) => item.id} 
      numColumns={columns}
      onEndReached={onEndReached}
      onEndReachedThreshould={onEndReachedThreshould}
      renderItem= {renderItemCompanies}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
}
