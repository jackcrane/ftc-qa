/**
 * String.prototype.replaceAll() polyfill
 * https://gomakethings.com/how-to-replace-a-section-of-a-string-with-another-one-with-vanilla-js/
 * @author Chris Ferdinandi
 * @license MIT
 */
if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    // If a regex pattern
    if (Object.prototype.toString.call(str).toLowerCase() === '[object regexp]') {
      return this.replace(str, newStr);
    }

    // If a string
    return this.replace(new RegExp(str, 'g'), newStr);
  };
}

import { useEffect, useState } from 'react';
import { EmbeddedLink, Link, Text, Utilities } from './styled';
import { Linking } from 'react-native';

const RichTextRenderer = ({ text }) => {
  const [parsedText, setParsedText] = useState([]);
  useEffect(() => {
    text = text.replaceAll('&lt;', '<');
    text = text.replaceAll('&gt;', '>');
    text = text.replaceAll('&amp;', '&');
    text = text.replaceAll('&quot;', '"');
    text = text.replaceAll('&apos;', "'");
    text = text.replaceAll('&nbsp;', ' ');
    // Split the text
    const substrings = text.split(/(Game Manual [12]\s*<[a-zA-Z]{1,2}\d{1,3}?>[a-z]|!Q\d{1,3}\b)/);
    // Remove any empty strings from the array
    const parsedText = substrings.filter((s) => s !== '');
    setParsedText(parsedText);
  }, []);

  const computeType = (slice) => {
    if (slice.startsWith('Game Manual 1')) {
      return (
        <EmbeddedLink
          onPress={() =>
            Linking.openURL(
              'https://www.firstinspires.org/sites/default/files/uploads/resource_library/ftc/game-manual-part-1-traditional-events.pdf'
            )
          }>
          {slice}
        </EmbeddedLink>
      );
    } else if (slice.startsWith('Game Manual 2')) {
      return (
        <EmbeddedLink
          onPress={() =>
            Linking.openURL(
              'https://www.firstinspires.org/sites/default/files/uploads/resource_library/ftc/game-manual-part-2-traditional.pdf'
            )
          }>
          {slice}
        </EmbeddedLink>
      );
    } else if (slice.startsWith('!Q')) {
      return <EmbeddedLink onPress={() => alert(`Go to ${slice}`)}>{slice}</EmbeddedLink>;
    } else {
      return slice.split('\n').map((slice) => (
        <>
          {slice.split(' ').map((word, i) => (
            <Text.Body key={'inner' + i}>
              {word}
              {word[word.length] !== ' ' && ' '}
            </Text.Body>
          ))}
        </>
      ));
    }
  };

  return (
    <Utilities.InlineProvider>
      {parsedText.map((slice) => computeType(slice))}
    </Utilities.InlineProvider>
  );
};

export { RichTextRenderer };
