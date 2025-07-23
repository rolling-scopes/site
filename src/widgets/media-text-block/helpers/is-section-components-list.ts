import React, { ReactNode } from 'react';

import { SectionResolver } from '@/views/course/section-resolver';

/**
 * Checks whenever nodes are the list of SectionResolver components
 *
 * @param nodes {ReactNode[]} – The node list to be checked
 * @return {boolean}
 */
export function isSectionComponentsList(nodes: ReactNode | ReactNode[]) {
  if (!Array.isArray(nodes)) {
    return false;
  }

  return React.Children.toArray(nodes.filter(Boolean)).every((child) => {
    return (
      React.isValidElement(child)
      && typeof child.type === 'function'
      && SectionResolver.name === child.type.name
    );
  });
}
