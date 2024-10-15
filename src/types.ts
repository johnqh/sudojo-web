// src/types.ts

import { JSXElementConstructor, ReactElement } from 'react';

// src/types.ts

export interface MenuItem {
  name: string;
  icon: JSX.Element;
  path: string; // Add the path property for navigation
}

export interface ProfileItem {
  image: string;
  title: string;
  subtext: string;
}

export interface SettingsItem {
  title: string;
  subtitle: string;
  onClick?: () => void;
}