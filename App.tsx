import * as Sentry from '@sentry/react-native'
import { StatusBar } from 'react-native'

import { AppThemeProvider } from './src/context/ThemeContext'
import { Routes } from './src/routes'

Sentry.init({
  dsn: 'https://e1b336fd31ac48ffb005249446fe64aa@o4505295931703296.ingest.sentry.io/4505295938453504',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
})
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
