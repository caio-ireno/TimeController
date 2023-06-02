import React from 'react'
import { Text, View } from 'react-native'

import Button from '../components/Button'
import { PageDefault } from '../components/PageDefault'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

export function Options() {
  const { theme, toggleTheme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <PageDefault>
      <View style={dynamicStyles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          <Text style={{ fontSize: 20, color: theme.textColor }}>Tema</Text>
          <Button label="Tema" fontSize={20} onPress={toggleTheme} />
        </View>
      </View>
    </PageDefault>
  )
}
