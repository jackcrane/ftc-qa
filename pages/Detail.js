import { useEffect, useState } from 'react';
import { ActivityIndicator, Linking } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { Container, Text, Card, Flex, Utilities } from '../components/styled';
import Page from '../Templates/Page';
import moment from 'moment';
import { parse } from '../lib/parse';
import { RichTextRenderer } from '../components/RichTextRenderer';

const Home = (props) => {
  const res = props.route.params.res;
  const parsedDescription = parse(res.description);

  return (
    <Page
      navigation={props.navigation}
      spaceAfterOutScroll={0}
      actionLabel="< back"
      action={() => props.navigation.goBack()}>
      <Text.Subtitle>Question Details</Text.Subtitle>
      <Utilities.Spacer height={5} />
      <Card.Card>
        <Card.Full>
          <Text.Body>{res.title}</Text.Body>
        </Card.Full>
      </Card.Card>
      <Text.Tiny>
        Updated {moment(res.pubdate).fromNow()}. Asked by {parsedDescription.asker}
      </Text.Tiny>
      <Utilities.Spacer height={5} />
      <>
        <Text.TriSubtitle>Question</Text.TriSubtitle>
        <Utilities.Spacer height={5} />
        <RichTextRenderer text={parsedDescription.question} />
        <Utilities.Spacer height={15} />
        <Text.TriSubtitle>Answer</Text.TriSubtitle>
        <Utilities.Spacer height={5} />
        <RichTextRenderer text={parsedDescription.answer} />
      </>
      <Utilities.Spacer height={25} />
      <Card.Card onPress={() => Linking.openURL(res.url)}>
        <Card.Full>
          <Text.Body>View on the FTC Forums</Text.Body>
        </Card.Full>
      </Card.Card>
    </Page>
  );
};

export default Home;
