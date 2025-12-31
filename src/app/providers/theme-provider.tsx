"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
// internally adds data-theme = dark
const AppThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      storageKey="app-theme"
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
