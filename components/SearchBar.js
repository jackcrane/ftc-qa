import { useEffect, useState } from 'react';
import { Search } from './styled';
import Fuse from 'fuse.js';
let fuse;

const SearchBar = (props) => {
  const [rssdata, setRssData] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);
  const [results, setResults] = useState([]);
  const [searchState, setSearchState] = useState('Building Component');
  const [statefulSearchIndex, setStatefulSearchIndex] = useState([]);

  useEffect(() => {
    props.setState(searchState);
  }, [searchState]);

  useEffect(() => {
    (async () => {
      setSearchState('Fetching Data');
      const res = await fetch(
        'https://xml-layer.jackcrane.rocks/v1?url=https://ftc-qa.firstinspires.org/rss/answers.rss'
      );
      setSearchState('Parsing Data');
      const data = await res.json();
      console.log(res.status);
      if (res.status !== 200) {
        setSearchState('Error');
        return;
      }
      setSearchState('Simplifying Data');
      const searchIndex = data.rss.channel.item.map((item) => {
        return {
          url: item.guid._text,
          title: item.title._cdata,
          pubdate: item.pubDate._text,
          description: item.description._cdata,
          qid: item.title._cdata.split(' ')[0],
        };
      });
      setSearchState('Building Index');
      props.setResults(searchIndex.map((item) => ({ item })));
      setStatefulSearchIndex(searchIndex.map((item) => ({ item })));
      fuse = new Fuse(searchIndex, {
        keys: [
          {
            name: 'title',
            weight: 0.7,
          },
          {
            name: 'description',
            weight: 0.3,
          },
          {
            name: 'qid',
            weight: 1,
          },
        ],
      });
      setRssData(searchIndex);
      setSearchState('Ready');
    })();
  }, []);

  useEffect(() => {
    if (fuse?.search) {
      const startTime = Date.now();
      let result = fuse.search(searchQuery);
      const endTime = Date.now();
      props.setSearchTime(endTime - startTime);
      result.length > 0 ? props.setResults(result) : props.setResults(statefulSearchIndex);
    } else {
      console.log('no fuse.search');
    }
  }, [searchQuery]);

  return (
    <Search.Container>
      <Search.Input placeholder="Search" onChangeText={setSearchQuery} />
    </Search.Container>
  );
};

export { SearchBar };
