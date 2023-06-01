import { AppThemeProvider } from './src/context/ThemeContext'
import { Routes } from './src/routes'

function App() {
  return (
    <AppThemeProvider>
      <Routes></Routes>
    </AppThemeProvider>
  )
}

export default App
