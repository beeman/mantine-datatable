import { MantineColor } from '@mantine/core';
import { FC } from 'react';
import { Adjustments, Home, Rocket } from 'tabler-icons-react';

export const HEADER_HEIGHT = 56;
export const NAVBAR_WIDTH = 280;
export const NAVBAR_BREAKPOINT = 'md';
export const REPO_LINK = 'https://github.com/icflorescu/mantine-datatable';

export const PAGES: (
  | {
      icon: FC<{ size?: string | number }>;
      color?: MantineColor;
      title: string;
      path?: string;
      items?: never;
    }
  | {
      icon?: never;
      color?: MantineColor;
      title: string;
      path: string;
      items: { title: string; path: string }[];
    }
)[] = [
  { icon: Home, title: 'Home' },
  { icon: Rocket, color: 'orange', title: 'Getting started', path: 'getting-started' },
  {
    color: 'green',
    title: 'Examples',
    path: 'examples',
    items: [
      { title: 'Basic usage', path: 'basic-usage' },
      { title: 'Basic table properties', path: 'basic-table-properties' },
      { title: 'Non-standard record IDs', path: 'non-standard-record-ids' },
      { title: 'Column properties', path: 'column-properties' },
      { title: 'Scrollable vs. auto-height', path: 'scrollable-vs-auto-height' },
      { title: 'Empty state', path: 'empty-state' },
      { title: 'Pagination', path: 'pagination' },
      { title: 'Sorting', path: 'sorting' },
      { title: 'Records selection', path: 'records-selection' },
      { title: 'Handling row clicks', path: 'handling-row-clicks' },
      { title: 'Context menu', path: 'context-menu' },
      { title: 'Asynchronous data loading', path: 'asynchronous-data-loading' },
      { title: 'Complex usage', path: 'complex-usage' },
    ],
  },
  { icon: Adjustments, color: 'grape', title: 'Component properties', path: 'component-properties' },
];
