import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == '#') {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}

const defaults = {
  text: {
    fontFamily: 'JBM',
  },
  colors: {
    blue: '#005fa8',
    red: '#e2090f',
  },
};

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Text = {
  Title: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 40px;
  `,
  Subtitle: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 30px;
  `,
  TriSubtitle: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 25px;
  `,
  Body: styled.Text`
    font-family: ${defaults.text.fontFamily};
  `,
  SerifBody: styled.Text`
    font-size: 16px;
  `,
  Tiny: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 10px;
  `,
};

export const Table = {
  Table: styled.View`
    flex-direction: column;
    width: 100%;
    border-color: #c0c0c0;
    border-width: 1px;
    padding: 10px;
  `,
  Row: styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  `,
  Cell: styled.ScrollView`
    flex-direction: row;
    flex-wrap: wrap;
    word-break: break-all;
    min-width: 40%;
  `,
};

Table.Cell.defaultProps = {
  horizontal: true,
};

export const Utilities = {
  TitleRow: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom-color: '#000';
    border-bottom-width: 4px;
    padding-bottom: 5px;
  `,
  PaddedContainer: styled.View`
    padding-top: 60px;
    width: 100%;
    flex: 1;
  `,
  Vcenter: styled.View`
    align-items: center;
    flex-direction: row;
  `,
  _InnerBody: styled.View`
    flex: 1;
    width: 100%;
    min-height: 600px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin-bottom: 100px;
  `,
  Body,
  HorizontallyPaddedContainer: styled.View`
    padding-left: 20px;
    padding-right: 20px;
  `,
  Spacer: styled.View`
    height: ${(props) => props.height || 20}px;
  `,
  InlineProvider: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
  `,
};

export const Search = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-color: #000;
    border-width: 1px;
    border-color: #c0c0c0;
    border-radius: 10px;
    background-color: #e0e0e0;
    padding: 10px;
  `,
  Input: styled.TextInput`
    flex: 1;
    font-family: ${defaults.text.fontFamily};
    font-size: 18px;
  `,
};

export const Flex = {
  Center: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
};

export const Card = {
  Container: styled.View`
    flex: 1;
  `,
  Card: styled.TouchableOpacity`
    width: 100%;
    border-radius: 10px;
    border-color: #c0c0c0;
    border-width: 1px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  `,
  Number: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
    width: 20%;
  `,
  Content: styled.View`
    width: 70%;
  `,
  Full: styled.View`
    width: 100%;
  `,
};

export const Body = (props) => {
  return (
    <KeyboardAwareScrollView>
      <Utilities._InnerBody>{props.children}</Utilities._InnerBody>
    </KeyboardAwareScrollView>
  );
};

export const Image = {
  Logo: styled.Image`
    height: 48px;
    width: 90px;
  `,
};
Image.Logo.defaultProps = {
  resizeMode: 'contain',
};

const TouchLink = styled.TouchableOpacity`
  font-family: ${defaults.text.fontFamily};
  font-size: 20px;
  color: #000;
`;

export const Flag = {
  Flag: styled.TouchableOpacity`
    border-color: ${defaults.colors.red};
    border-width: 1px;
    border-radius: 10px;
    background-color: #fddcdd;
    padding: 10px;
    margin-bottom: 10px;
  `,
  Text: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 12px;
  `,
  Title: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 20px;
  `,
};

const _Link = {
  Body: styled.TouchableOpacity`
    font-family: ${defaults.text.fontFamily};
    font-size: 20px;
    color: ${defaults.colors.blue};
  `,
  Text: styled.Text`
    font-family: ${defaults.text.fontFamily};
    font-size: 20px;
    color: ${defaults.colors.blue};
  `,
};

const _EmbeddedLink = {
  Text: styled(Text.Body)`
    color: ${defaults.colors.blue};
  `,
  Body: styled.TouchableOpacity`
    background-color: ${LightenDarkenColor(defaults.colors.blue, 200)};
    border-width: 1px;
    border-color: ${defaults.colors.blue};
    border-radius: 5px;
  `,
};

export const Link = (props) => {
  return (
    <_Link.Body onPress={props.onPress}>
      <_Link.Text>{props.children}</_Link.Text>
    </_Link.Body>
  );
};

export const EmbeddedLink = (props) => {
  return (
    <_EmbeddedLink.Body onPress={props.onPress}>
      <_EmbeddedLink.Text>{props.children}</_EmbeddedLink.Text>
    </_EmbeddedLink.Body>
  );
};
