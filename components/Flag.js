import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { Flag } from './styled';

const _Flag = () => {
  const [flagData, setFlagData] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://raw.githubusercontent.com/jackcrane/ftc-qa/master/flag.json'
      );
      const data = await res.json();
      setFlagData(data);
    })();
  }, []);

  if (!flagData) return null;
  if (flagData.show === false) return null;

  return (
    flagData.show === true && (
      <Flag.Flag onPress={() => Linking.openURL(flagData.link)}>
        <Flag.Title>{flagData.title}</Flag.Title>
        <Flag.Text>{flagData.description}</Flag.Text>
      </Flag.Flag>
    )
  );
};

export { _Flag as Flag };
