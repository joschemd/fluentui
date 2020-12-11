import * as React from 'react';
import { useDivider } from './useDivider';
import { DividerProps } from './Divider.types';
import { useInlineTokens } from '@fluentui/react-theme-provider';
import { useDividerClasses } from './useDividerClasses';
import { renderDivider } from './renderDivider';

/**
 * Define a styled Divider, using the `useDivider` hook.
 * {@docCategory Divider }
 */
export const Divider = React.forwardRef<HTMLElement, DividerProps>((props, ref) => {
  const state = useDivider(props, ref);

  useDividerClasses(state);
  useInlineTokens(state, '--divider');

  return renderDivider(state);
});

Divider.displayName = 'Divider';
