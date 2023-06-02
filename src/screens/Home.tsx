import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Button from '../components/Button'
import DataSlide from '../components/DataSlide'
import { PageDefault } from '../components/PageDefault'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

export function Home() {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)
  const navigation = useNavigation()

  const handleNew = () => {
    navigation.navigate('new')
  }

  return (
    <PageDefault>
      <View style={dynamicStyles.container}>
        <View style={dynamicStyles.header}>
          <Text style={dynamicStyles.textHeader}>Agenda</Text>
          <Button label="+" fontSize={32} onPress={handleNew} />
        </View>
        <GestureHandlerRootView
          style={{
            height: '90%',
            width: '100%',
            marginTop: 20,
          }}
        >
          <DataSlide />
        </GestureHandlerRootView>
      </View>
    </PageDefault>
  )
}
