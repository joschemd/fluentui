import * as React from 'react';
import { Divider, DividerProps } from '@fluentui/react-divider';
// import { PartialTheme, ThemeProvider } from '@fluentui/react-theme-provider';
import * as classes from '../react-divider.stories.scss';

const DividerExamples = (props: DividerProps) => <Divider {...props}>Hello World!</Divider>;

export const DividerExample = () => <DividerExamples />;
