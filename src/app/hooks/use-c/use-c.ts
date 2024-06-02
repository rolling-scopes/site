import { useState } from 'react';

export function c(size: number) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useState(() => new Array(size))[0];
}
