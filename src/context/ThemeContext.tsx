import React, { createContext, useContext, ReactNode } from 'react';

// Dark theme with neon accents - matching the reference portfolio
export const professionalTheme = {
  // Primary Colors
  primaryAccent: '#00d4ff',        // Bright cyan/blue neon
  secondaryAccent: '#ff0080',      // Hot pink neon
  tertiaryAccent: '#00ff88',       // Bright green neon
  textPrimary: '#ffffff',          // White text
  textSecondary: '#b0b0b0',        // Light gray text
  background: '#0a0a0a',           // Very dark background
  cardBackground: '#1a1a1a',       // Dark card background
  navbarBackground: '#0a0a0a',     // Dark navbar
  footerBackground: '#0a0a0a',     // Dark footer
  
  // Gradients
  heroGradient: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
  buttonHoverGradient: 'linear-gradient(45deg, #00d4ff, #ff0080)',
  neonGradient: 'linear-gradient(45deg, #00d4ff, #00ff88, #ff0080)',
  
  // Shadows
  cardShadow: '0 8px 32px rgba(0, 212, 255, 0.1)',
  hoverShadow: '0 12px 40px rgba(0, 212, 255, 0.2)',
  neonShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
  
  // Borders
  borderColor: '#333333',
  cardBorderRadius: '16px',
  buttonBorderRadius: '8px',
  
  // Transitions
  transition: '0.3s ease-in-out',
  
  // Hover Colors
  primaryHover: '#00b8e6',
  secondaryHover: '#e60073'
};

interface ThemeContextType {
  isDark: boolean;
  professionalTheme: typeof professionalTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Always use dark theme (neon accent theme)
  const isDark = true;

  return (
    <ThemeContext.Provider value={{ isDark, professionalTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};