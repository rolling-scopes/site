import React, { Component, ReactNode } from 'react';

export function getReactChildAt(node: ReactNode, index = 0): Component | string | null {
  if (
    !node
    || !React.isValidElement(node)
    || !node.props
    || typeof node.props !== 'object'
    || !('children' in node.props)
    || !Array.isArray(node.props.children)
  ) {
    return null;
  }

  return node.props.children.at(index);
}
