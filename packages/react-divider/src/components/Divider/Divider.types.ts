import * as React from 'react';
import { ComponentProps, ShorthandProps } from '@fluentui/react-compose/lib/next/index';
import { ColorTokens, RecursivePartial, FontTokens, SizeValue } from '@fluentui/theme';

/**
 * {@docCategory Divider }
 */
export type DividerProps = ComponentProps &
  React.HTMLAttributes<HTMLElement> & {
    /**
     * A divider can justify the content. Center is default.
     */
    alignContent?: 'start' | 'end' | 'center';

    children?: any;

    /* A divider can have a overriding color */
    color?: string;

    /**
     * Shorthand children content within the button.
     */
    content?: ShorthandProps;

    /* A divider can remove any extra margins before or after the element */
    fitted?: boolean;

    /* important will emphasis the content */
    important?: boolean;

    /* The size is a multiplier value for the size */
    size?: SizeValue;

    tokens?: RecursivePartial<DividerTokens>;

    /* A divider can be horizontal (default) or verticle*/
    vertical?: boolean;
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
