import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`

export const ViewTitleCategory = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  padding: 0 0 24px 24px;
`

export const AlertError = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.TEXT_HIGHLIGHT};
  text-align: center;
`

export const ButtonGoBack = styled.TouchableOpacity`
  margin-right: 8px;
`

export const Main = styled.ScrollView`
  flex: 1;
  width: 100%;
  margin-top: 24px;
  padding: 0 24px;
`

export const CompanyName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
`

export const CompanyDescription = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  margin-top: 24px;
  text-align: justify;
  color: ${({ theme }) => theme.COLORS.TEXT_SUBTITLE};
`

export const CompanyAdress = styled.View`
  width: 100%;
  margin-top: 24px;
`

export const CompanyAdressType = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.TEXT_SUBTITLE};
`

export const CompanyAdressContent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  color: ${({ theme }) => theme.COLORS.TEXT_SUBTITLE};
  padding: 2px 0;
`

export const SocialMedia = styled.View`
  flex-direction: row;
  margin-top: 24px;
  margin-bottom: 24px;
`

export const Link = styled.TouchableOpacity`

`