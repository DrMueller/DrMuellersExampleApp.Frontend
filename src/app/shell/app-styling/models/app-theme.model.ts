export interface AppTheme {
  className: string;
  description: string;
  iconName: string;
  key: string;
}

export const darkTheme: AppTheme = {
  className: 'dark-theme',
  description: 'Dark theme',
  iconName: 'dark_mode',
  key: 'dark'
};

export const lightTheme: AppTheme = {
  className: 'light-theme',
  description: 'Light theme',
  iconName: 'light_mode',
  key: 'light'
};

export const allThemes: AppTheme[] = [
  lightTheme,
  darkTheme
];

export const appThemeStorageKey = 'appTheme';
