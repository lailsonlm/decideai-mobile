import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
`

export const ViewTitleCategory = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`

export const AlertError = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.TEXT_HIGHLIGHT};
  text-align: center;
`