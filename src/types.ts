// src/types.ts

import { JSXElementConstructor, ReactElement } from 'react';

export interface MenuItem {
  name: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>>;
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