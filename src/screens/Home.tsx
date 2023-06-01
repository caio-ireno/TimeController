import React from 'react'
import { Button, Text, View } from 'react-native'

import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

export function Home() {
  const { theme, toggleTheme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <View style={dynamicStyles.container}>
      <Text>Home</Text>
      <Button title="Theme" onPress={toggleTheme} />
    </View>
  )
}
