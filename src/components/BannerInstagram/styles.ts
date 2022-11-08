import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
  margin-top: 16px;
  color: ${({ theme }) => theme.COLORS.TEXT_HIGHLIGHT};
  padding: 24px;
  margin-bottom: 60px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
  margin-bottom: 16px;
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.SANS.SEMI_BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  color: ${({ theme }) => theme.COLORS.ICONS};
  margin-left: 4px;
`

export const Link = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`