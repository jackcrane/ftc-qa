import Page from '../Templates/Page';
import { Link, Table, Text, Utilities } from '../components/styled';
import { Linking } from 'react-native';
import * as Constants from 'expo-constants';
import * as Application from 'expo-application';
import { useState } from 'react';

const About = (props) => {
  const [constants] = useState(Constants);
  const [application] = useState(Application);

  return (
    <Page
      navigation={props.navigation}
      spaceAfterOutScroll={0}
      actionLabel="< back"
      action={() => props.navigation.goBack()}>
      <Text.Subtitle>About</Text.Subtitle>
      <Utilities.Spacer height={15} />
      <>
        <Text.TriSubtitle>What is this?</Text.TriSubtitle>
        <Text.SerifBody>
          This app was created by Jack Crane to help teams & refs quickly and easily reference the
          updated game, season, and rules information contained in the FTC Forums. It works by
          fetching the RSS feed from the FTC Forums. This app is not directly affiliated with FIRST
          or FTC. Data is fetched when possible and cached, allowing for offline access.
        </Text.SerifBody>
      </>
      <Utilities.Spacer />
      <>
        <Text.TriSubtitle>FAQ</Text.TriSubtitle>
        <Text.SerifBody>
          How do I get updated data? The app will automatically fetch new data when it is opened. To
          request new data, fully close the app and re-open it. Data is cached to allow for offline
          access. You can tell if the app is using cached data because there will be a red banner on
          the top of the screen notifying you that the web request failed. You can see the date of
          the last successful fetch by scrolling to the bottom of the "home" page.
        </Text.SerifBody>
        <Utilities.Spacer height={5} />
        <Text.SerifBody>
          How do the sorting methods work? Data is sorted by relevance by default. The sorting
          algorithm looks first for your query in the title and prioritizes those results, then
          looks for your query in the body and sorts those results after. The "most recent" sorting
          method sorts by the date of the post. If you are looking to contribute, the sorting
          methods need to be improved.
        </Text.SerifBody>
      </>
      <Utilities.Spacer />
      <>
        <Text.TriSubtitle>Contributing</Text.TriSubtitle>
        <Text.SerifBody>
          This is a simple app but still requires upkeep and improvements. If you know React
          Native/expo and would like to get involved, hit up the GitHub repo and submit a pull
          request! There should always be things in the Issues tab that need worked on.
        </Text.SerifBody>
        <Utilities.Spacer height={5} />
        <Link onPress={() => Linking.openURL('https://github.com/jackcrane/ftc-qa')}>
          Open on GitHub
        </Link>
      </>
      <Utilities.Spacer />
      <>
        <Text.TriSubtitle>Supporting</Text.TriSubtitle>
        <Text.SerifBody>
          I build this app in my free time as volunteer work. If you want to help support the
          further development of this app, I would appreciate donations to my
        </Text.SerifBody>
        <Utilities.Spacer height={5} />
        <Link onPress={() => Linking.openURL('https://www.buymeacoffee.com/jackcrane')}>
          Buy Me A Coffee!
        </Link>
      </>
      <Utilities.Spacer />
      <>
        <Text.TriSubtitle>App Information</Text.TriSubtitle>
        <Table.Table>
          <Table.Row>
            <Table.Cell>
              <Text.SerifBody>App Ownership</Text.SerifBody>
            </Table.Cell>
            <Table.Cell>
              <Text.SerifBody>{JSON.stringify(constants.AppOwnership)}</Text.SerifBody>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Text.SerifBody>Build</Text.SerifBody>
            </Table.Cell>
            <Table.Cell>
              <Text.Body>{application.nativeBuildVersion}</Text.Body>
            </Table.Cell>
          </Table.Row>
        </Table.Table>
      </>
      <Utilities.Spacer />
      <>
        <Text.TriSubtitle>MIT License</Text.TriSubtitle>
        <Text.Body>
          Copyright 2022 Jack Crane
          {'\n\n'}
          Permission is hereby granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files (the "Software"), to deal in the Software
          without restriction, including without limitation the rights to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
          to whom the Software is furnished to do so, subject to the following conditions:
          {'\n\n'}
          The above copyright notice and this permission notice shall be included in all copies or
          substantial portions of the Software.
          {'\n\n'}
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
          PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
          FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
          DEALINGS IN THE SOFTWARE.
        </Text.Body>
      </>
    </Page>
  );
};

export default About;
