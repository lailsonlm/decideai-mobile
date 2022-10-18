import { ViewProps } from 'react-native';
import styled from 'styled-components/native'

interface ContainerType extends ViewProps {
  selectCategory: string;
  title: string;
}

export const Container = styled.TouchableOpacity<ContainerType>`
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 145px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.REGULAR};
  margin-left: 8px;
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const ContainerSelected = styled.TouchableOpacity<ContainerType>`
  padding: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 145px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HIGHLIGHT};
`

export const TitleSelected = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.REGULAR};
  margin-left: 8px;
  color: ${({ theme }) => theme.COLORS.TEXT_HIGHLIGHT};
`