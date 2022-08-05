export interface AppTheme {
  className: string;
  description: string;
}

export const darkTheme: AppTheme = {
  className: 'dark-theme',
  description: 'Dark theme'
};

export const lightTheme: AppTheme = {
  className: 'light-theme',
  description: 'Light theme'
};

export const allThemes: AppTheme[] = [
  lightTheme,
  darkTheme
];

export const appThemeStorageKey = 'appTheme';
