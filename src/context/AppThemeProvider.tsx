import { useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../styles'
import { AppThemeContext } from './AppThemeContext'

type AppThemeProviderProps = {
  children: ReactNode
}

export const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  const [appTheme, setAppTheme] = useState(
    () => localStorage.getItem('theme') ?? 'light'
  )

  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('theme', appTheme)
  }, [appTheme])

  return (
    <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>
      <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}

export default AppThemeProvider
