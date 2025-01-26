export type HeaderProps = {
  zoom: number;
  topBarWidth: number;
  showThemeToggle?: boolean;
  toggleTheme?: () => void;
  openHistory: () => void;
  onSync?: () => void;
};
