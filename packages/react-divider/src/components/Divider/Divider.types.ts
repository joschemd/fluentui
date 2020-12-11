import * as React from 'react';
import { ComponentProps, ShorthandProps } from '@fluentui/react-compose/lib/next/index';
import { ColorTokens, RecursivePartial, FontTokens } from '@fluentui/theme';

/**
 * {@docCategory Divider }
 */
export type DividerProps = ComponentProps &
  React.HTMLAttributes<HTMLElement> & {
    /**
     * Shorthand children content within the button.
     */
    content?: ShorthandProps;

    tokens?: RecursivePartial<DividerTokens>;
  };

/**
 * {@docCategory Divider }
 */
export interface DividerState extends DividerProps {
  dividerRef?: React.RefObject<HTMLElement>;
}

/**
 * {@docCategory Divider }
 */
export type DividerTokens = ColorTokens & FontTokens & {};

/**
 * {@docCategory Divider }
 */
export type DividerVariants<TTokens = DividerTokens> = {
  root?: TTokens;
};
