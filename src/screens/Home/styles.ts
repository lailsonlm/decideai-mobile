import styled from 'styled-components/native'
import { CategoriesListType } from '.'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`

export const ViewIntro = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  align-items: center;
`

export const Heading = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  text-align: center;
  margin-top: 48px;
  padding-left: 24px;
  padding-right: 24px;
`

export const InstructionText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.LIGHT};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM};
    color: ${({ theme }) => theme.COLORS.TEXT_INSTRUCTION};
    margin-top: 8px;
    text-align: center;
    padding-left: 24px;
    padding-right: 24px;
`

export const ImgBackground = styled.Image`
  width: 100%;
  margin-top: 16px;
  margin-left: 24px;
`

export const Main = styled.View`
  flex: 1;
  width: 100%;
`

export const MainTitle = styled.Text`
  margin-top: 24px;
  padding: 0 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
`

export const FlatListCategories = styled.FlatList<CategoriesListType>`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const AlertError = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.TEXT_HIGHLIGHT};
  text-align: center;
`

export const ButtonViewMore = styled.Pressable`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HIGHLIGHT};
  padding: 8px 16px;
  border-radius: 4px;
  margin: 16px 8px 0;
`

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.TEXT_HIGHLIGHT};
  width: 100%;
  text-align: center;
`