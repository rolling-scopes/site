import React from 'react';
import { plainTextReplacer } from './plain-text-replacer';

describe('plainTextReplacer', () => {
  it('should return source text if no replacements are specified', () => {
    const sourceText = 'source text';
    const result = plainTextReplacer(sourceText, []);

    expect(result).toBe(sourceText);
  });

  it('should return source text if source text is empty', () => {
    const sourceText = '';
    const result = plainTextReplacer(sourceText, [
      {
        text: 'abc',
        replacement: 'def',
      },
    ]);

    expect(result).toBe(sourceText);
  });

  it('should replace text with element', () => {
    const replaceData = [
      {
        text: 'link',
        replacement: {
          element: () => <a />,
          props: { children: 'some link' },
        },
      },
    ];

    const text = 'some text ';
    const sourceText = `${text}${replaceData[0].text}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const replacementData = replaceData[0].replacement;

    const expectResult = [
      text,
      React.createElement(replacementData.element, {
        key: 0,
        ...replacementData.props,
      }),
    ];

    expect(result[1]).toStrictEqual(expectResult[1]);
  });

  it('should replace text with text', () => {
    const replaceData = [
      {
        text: 'link',
        replacement: 'textlink',
      },
    ];

    const text = 'some text ';
    const sourceText = `${text}${replaceData[0].text}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const expectResult = [text, replaceData[0].replacement];

    expect(result).toStrictEqual(expectResult);
  });

  it('should replace text with text and save last part of source text', () => {
    const replaceData = [
      {
        text: 'link',
        replacement: 'textlink',
      },
    ];

    const textStart = 'some text ';
    const textEnd = ' this is the end';
    const sourceText = `${textStart}${replaceData[0].text}${textEnd}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const expectResult = [textStart, replaceData[0].replacement, textEnd];

    expect(result).toStrictEqual(expectResult);
  });

  it('should replace text with element and save last part of source text', () => {
    const replaceData = [
      {
        text: 'link',
        replacement: {
          element: () => <a />,
          props: { children: 'some link' },
        },
      },
    ];

    const textStart = 'some text ';
    const textEnd = ' this is the end';
    const sourceText = `${textStart}${replaceData[0].text}${textEnd}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const replacementData = replaceData[0].replacement;

    const expectResult = [
      textStart,
      React.createElement(replacementData.element, {
        key: 0,
        ...replacementData.props,
      }),
      textEnd,
    ];

    expect(result).toStrictEqual(expectResult);
  });

  it('should replace text with element multiply times', () => {
    const replaceData = [
      {
        text: 'link',
        replacement: {
          element: () => <a />,
          props: { children: 'some link' },
        },
      },
    ];

    const replacementData = replaceData[0].replacement;

    const textStart = 'some text ';
    const textEnd = ' this is the end';
    const sourceText = `${textStart}${replaceData[0].text}${textEnd}${replaceData[0].text}${textEnd}${replaceData[0].text}${textEnd}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const expectResult = [
      textStart,
      React.createElement(replacementData.element, {
        key: 0,
        ...replacementData.props,
      }),
      textEnd,
      React.createElement(replacementData.element, {
        key: 1,
        ...replacementData.props,
      }),
      textEnd,
      React.createElement(replacementData.element, {
        key: 2,
        ...replacementData.props,
      }),
      textEnd,
    ];

    expect(result).toStrictEqual(expectResult);
  });

  it('should replace multiply texts with elements multiply times', () => {
    const replaceData = [
      {
        text: 'link',
        replacement: {
          element: () => <a />,
          props: { children: 'some link' },
        },
      },
      {
        text: 'button',
        replacement: {
          element: () => <button />,
          props: { children: 'some button' },
        },
      },
    ];

    const replacementLinkData = replaceData[0].replacement;
    const replacementButtonData = replaceData[1].replacement;

    const textStart = 'some text ';
    const textEnd = ' this is the end';
    const sourceText = `${textStart}${replaceData[0].text}${textEnd}${replaceData[1].text}${textEnd}${replaceData[0].text}${textEnd}${replaceData[1].text}${textEnd}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const expectResult = [
      textStart,
      React.createElement(replacementLinkData.element, {
        key: 0,
        ...replacementLinkData.props,
      }),
      textEnd,
      React.createElement(replacementButtonData.element, {
        key: 1,
        ...replacementButtonData.props,
      }),
      textEnd,
      React.createElement(replacementLinkData.element, {
        key: 2,
        ...replacementLinkData.props,
      }),
      textEnd,
      React.createElement(replacementButtonData.element, {
        key: 3,
        ...replacementButtonData.props,
      }),
      textEnd,
    ];

    expect(result).toStrictEqual(expectResult);
  });

  it('should replace multiply texts with elements multiply times and ignore replacement which is not present in text', () => {
    const replaceData = [
      {
        text: 'not present',
        replacement: {
          element: () => <b />,
          props: { children: 'not present replacement' },
        },
      },
      {
        text: 'link',
        replacement: {
          element: () => <a />,
          props: { children: 'some link' },
        },
      },
      {
        text: 'button',
        replacement: {
          element: () => <button />,
          props: { children: 'some button' },
        },
      },
    ];

    const replacementLinkData = replaceData[0].replacement;
    const replacementButtonData = replaceData[1].replacement;

    const textStart = 'some text ';
    const textEnd = ' this is the end';
    const sourceText = `${textStart}${replaceData[0].text}${textEnd}${replaceData[1].text}${textEnd}${replaceData[0].text}${textEnd}${replaceData[1].text}${textEnd}`;
    const result = plainTextReplacer(sourceText, replaceData);

    const expectResult = [
      textStart,
      React.createElement(replacementLinkData.element, {
        key: 0,
        ...replacementLinkData.props,
      }),
      textEnd,
      React.createElement(replacementButtonData.element, {
        key: 1,
        ...replacementButtonData.props,
      }),
      textEnd,
      React.createElement(replacementLinkData.element, {
        key: 2,
        ...replacementLinkData.props,
      }),
      textEnd,
      React.createElement(replacementButtonData.element, {
        key: 3,
        ...replacementButtonData.props,
      }),
      textEnd,
    ];

    expect(result).toStrictEqual(expectResult);
  });
});
