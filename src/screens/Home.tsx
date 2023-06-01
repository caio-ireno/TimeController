import React from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Button from '../components/Button'
import MyComponent from '../components/DataSlide'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

export function Home() {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)

  return (
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.header}>
        <Text style={dynamicStyles.textHeader}>Agenda</Text>
        <Button label="+" />
      </View>
      <GestureHandlerRootView
        style={{
          height: '100%',
          width: '100%',
          marginTop: 20,
        }}
      >
        <MyComponent />
      </GestureHandlerRootView>
    </View>
  )
}
