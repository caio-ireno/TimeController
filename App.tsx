import { StatusBar } from 'react-native'

import { AppThemeProvider } from './src/context/ThemeContext'
import { Routes } from './src/routes'

function App() {
  return (
    <AppThemeProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Routes></Routes>
    </AppThemeProvider>
  )
}

export default App
