import React from 'react'
import { Button, Text, View } from 'react-native'

import { PageDefault } from '../components/PageDefault'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

export function Options() {
  const { theme, toggleTheme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <PageDefault>
      <View style={dynamicStyles.container}>
        <Text style={dynamicStyles.textBody}>Options</Text>
        <Button title="Theme" onPress={toggleTheme} />
      </View>
    </PageDefault>
  )
}
