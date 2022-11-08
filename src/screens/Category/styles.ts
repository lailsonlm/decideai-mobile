import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
  padding-bottom: 30px;
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