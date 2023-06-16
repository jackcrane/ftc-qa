import { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Flag } from '../components/Flag';
import { SearchBar } from '../components/SearchBar';
import { Container, Text, Card, Flex, Utilities } from '../components/styled';
import Page from '../Templates/Page';

const Home = (props) => {
  const [searchState, setSearchState] = useState('');
  const [results, setResults] = useState([]);
  const [searchTime, setSearchTime] = useState(0);
  return (
    <Page
      navigation={props.navigation}
      spaceAfterOutScroll={10}
      outScroll={
        <SearchBar
          setState={(state) => setSearchState(state)}
          setResults={(results) => setResults(results)}
          setSearchTime={(time) => setSearchTime(time)}
        />
      }>
      <Flag />
      <Text.Body>
        Found {results.length} results in {searchTime} ms
      </Text.Body>
      <Utilities.Spacer height={10} />
      <Card.Container>
        {searchState === 'Ready' ? (
          results.map((result, i) => (
            <Card.Card
              key={i}
              onPress={() => props.navigation.navigate('Detail', { res: result.item })}>
              <Card.Number>{result.item.qid}</Card.Number>
              <Card.Content>
                <Text.Body>{result.item.title.replace(result.item.qid + ' ', '')}</Text.Body>
              </Card.Content>
            </Card.Card>
          ))
        ) : (
          <Flex.Center>
            <ActivityIndicator size="large" />
            <Utilities.Spacer height={10} />
            <Text.Body>{searchState}</Text.Body>
          </Flex.Center>
        )}
      </Card.Container>
    </Page>
  );
};

export default Home;
