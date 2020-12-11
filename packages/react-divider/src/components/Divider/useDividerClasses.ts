/* eslint-disable @typescript-eslint/naming-convention */
import { makeVariantClasses } from '@fluentui/react-theme-provider';
import { DividerState, DividerVariants } from './Divider.types';

const GlobalClassNames = {
  root: 'ms-Divider',
};

export const useDividerClasses = makeVariantClasses<DividerState, DividerVariants>({
  name: 'Divider',
  prefix: '--divider',
  styles: {
    root: [GlobalClassNames.root],
  },
});
