import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import { View } from 'react-native'

import { DarkTheme, LightTheme } from '../theme'
import { ThemeType } from '../types/themeType'

interface ThemeContextProps {
  theme: ThemeType
  toggleTheme: () => void
}

interface AppThemeProviderProps {
  children: React.ReactNode
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: LightTheme,
  toggleTheme: () => {},
})

export const useAppThemeContext = () => {
  return useContext(ThemeContext)
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<ThemeType>(LightTheme)

  const toggleTheme = useCallback(() => {
    console.log('thema')
    setTheme(oldTheme => (oldTheme === LightTheme ? DarkTheme : LightTheme))
  }, [])

  const themeContextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <View
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  )
}
