import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CARD};
`

export const CoverView = styled.View`
  width: 100%;
`

export const NameCard = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.HEADING};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  padding: 8px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
`

export const ImageCover = styled.Image`
  height: 112px;
  width: 100%;
  object-fit: cover;
`