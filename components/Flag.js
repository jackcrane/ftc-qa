import { useEffect, useState } from 'react';
import { Flag } from './styled';

const _Flag = () => {
  const [flagData, setFlagData] = useState();
  useEffect(() => {
    (async () => {
      const res = await fetch('');
    })();
  }, []);

  return (
    <Flag.Flag>
      <Flag.Title></Flag.Title>
    </Flag.Flag>
  );
};

export { _Flag as Flag };
