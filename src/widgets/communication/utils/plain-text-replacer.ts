import React from 'react';

export interface ReplacementTextToElement {
  text: string;
  replacement:
    | {
      element: React.ElementType;
      props: object;
    }
    | string;
}

const findAllIndexes = (sourceText: string, textToFind: string) => {
  const indexes: Array<{ start: number;
    end: number; }> = [];
  let nextIndex = sourceText.indexOf(textToFind);

  while (nextIndex > 0) {
    indexes.push({
      start: nextIndex,
      end: nextIndex + textToFind.length,
    });

    nextIndex = sourceText.indexOf(textToFind, nextIndex + textToFind.length);
  }

  return indexes;
};

export function plainTextReplacer(
  sourceText: string,
  replacementData: Array<ReplacementTextToElement>,
) {
  if (sourceText.length === 0 || replacementData.length === 0) {
    return sourceText;
  }

  const extendedReplacementData = replacementData.map((el) => {
    const replacementIndexes = findAllIndexes(sourceText, el.text);

    return {
      replacementIndexes,
      ...el,
    };
  });

  const outputElementsArray: Array<React.ReactNode | string> = [];
  let lastIndex = 0;
  let keyCounter = 0;

  for (let i = 0; i < sourceText.length; i++) {
    const currentReplacement = extendedReplacementData.find((el) =>
      el.replacementIndexes.find((index) => index.start === i),
    );

    if (currentReplacement) {
      outputElementsArray.push(sourceText.substring(lastIndex, i));
      if (typeof currentReplacement.replacement === 'string') {
        outputElementsArray.push(currentReplacement.replacement);
      } else {
        const { replacement } = currentReplacement;
        const el = React.createElement(replacement.element, {
          key: keyCounter++,
          ...replacement.props,
        });

        outputElementsArray.push(el);
      }

      lastIndex =
        currentReplacement.replacementIndexes.find((index) => index.start === i)?.end || 0;
    }

    if (lastIndex < sourceText.length && i === sourceText.length - 1) {
      outputElementsArray.push(sourceText.substring(lastIndex, i + 1));
    }
  }

  return outputElementsArray;
}
