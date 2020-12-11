import * as React from 'react';
import { getSlots } from '@fluentui/react-compose/lib/next/index';
import { DividerState } from './Divider.types';
import { dividerShorthandProps } from './useDivider';

/**
 * Redefine the render function to add slots. Reuse the divider structure but add
 * slots to children.
 */
export const renderDivider = (state: DividerState) => {
  const { slots, slotProps } = getSlots(state, dividerShorthandProps);
  const { children } = state;

  const contentVisible = children || slotProps.content?.children;

  return <slots.root {...slotProps.root}>{contentVisible && <slots.content {...slotProps.content} />}</slots.root>;
};
