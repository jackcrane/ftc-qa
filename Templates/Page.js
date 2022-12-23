import { Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, Image, Text, Utilities, Body } from '../components/styled';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

const Page = (props) => {
  return (
    <Utilities.PaddedContainer>
      <StatusBar style="auto" />
      <Utilities.TitleRow>
        <Utilities.Vcenter>
          <Image.Logo source={require('../assets/FIRST.png')} />
          <Text.Title>{props.title || 'Q&A'}</Text.Title>
        </Utilities.Vcenter>
        <Link onPress={() => (props.action ? props.action() : props.navigation.navigate('About'))}>
          {props.actionLabel || 'about'}
        </Link>
      </Utilities.TitleRow>
      {props.outScroll && (
        <Utilities.HorizontallyPaddedContainer>
          <Utilities.Spacer />
          {props.outScroll}
          {props.spaceAfterOutScroll && <Utilities.Spacer height={props.spaceAfterOutScroll} />}
        </Utilities.HorizontallyPaddedContainer>
      )}
      <Body>{props.children}</Body>
    </Utilities.PaddedContainer>
  );
};

export default Page;
