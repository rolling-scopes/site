import { Children, ComponentProps, ReactNode, isValidElement } from 'react';

import { SectionResolver } from '@/widgets/section-resolver';

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
  const cleanNodes = nodes.filter(Boolean);

  if (cleanNodes.length <= 1) {
    return false;
  }

  return Children.toArray(cleanNodes).every((child) => {
    return (
      isValidElement(child)
      && typeof child.type === 'function'
      && SectionResolver.name === child.type.name
      && (child.props as ComponentProps<typeof SectionResolver>).section.name !== 'link'
    );
  });
}
