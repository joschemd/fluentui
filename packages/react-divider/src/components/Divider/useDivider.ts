import * as React from 'react';
import { makeMergeProps, resolveShorthandProps } from '@fluentui/react-compose/lib/next/index';
import { DividerProps, DividerState } from './Divider.types';
import { useDividerState } from './useDividerState';

/**
 * Consts listing which props are shorthand props.
 */
export const dividerShorthandProps = ['loader', 'content'];

const mergeProps = makeMergeProps({ deepMerge: dividerShorthandProps });

/**
 * Given user props, returns state and render function for a Divider.
 */
export const useDivider = (props: DividerProps, ref: React.Ref<HTMLElement>, defaultProps?: DividerProps) => {
  // Ensure that the `ref` prop can be used by other things (like useFocusRects) to refer to the root.
  // NOTE: We are assuming refs should not mutate to undefined. Either they are passed or not.
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const resolvedRef = ref || React.useRef();
  const state = mergeProps(
    {
      ref: resolvedRef,
      as: 'div',
      content: { as: 'span', children: props.children },
    },
    defaultProps,
    resolveShorthandProps(props, dividerShorthandProps),
  );

  useDividerState(state);

  return state as DividerState;
};
