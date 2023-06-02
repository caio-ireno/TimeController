import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import Button from '../components/Button'
import { PageDefault } from '../components/PageDefault'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'
import { Moon, Sun } from 'phosphor-react-native'

export function Options() {
  const [themeChange, setThemeChange] = useState(false)
  const { theme, toggleTheme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <PageDefault>
      <View style={dynamicStyles.container}>
        <TouchableOpacity
          onPress={() => {
            toggleTheme(), setThemeChange(!themeChange)
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: theme.buttonBackground,
          }}
        >
          <Text style={{ fontSize: 20, color: theme.buttonText }}>
            Mudar o tema
          </Text>
          {themeChange && <Sun size={30} />}
          {!themeChange && <Moon size={30} />}
        </TouchableOpacity>
      </View>
    </PageDefault>
  )
}
