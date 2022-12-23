import HTMLParser from 'fast-html-parser';

const parse = (html) => {
  var qdom = HTMLParser.parse(html);

  let question, answer, number, asker;

  qdom.querySelectorAll('span').forEach((el) => {
    // console.log(el.rawAttrs);
    if (el.rawAttrs === 'name="question"') {
      question = el.rawText;
    } else if (el.rawAttrs === 'name="answer"') {
      answer = el.rawText;
    } else if (el.rawAttrs === 'name="number"') {
      number = el.rawText;
    } else if (el.rawAttrs === 'name="asker"') {
      asker = el.rawText;
    }
  });

  question = question.replaceAll('&#x27;', "'");
  answer = answer.replaceAll('&#x27;', "'");

  return {
    question,
    answer,
    number,
    asker,
  };
};

export { parse };
