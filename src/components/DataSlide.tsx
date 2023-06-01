import React, { useState } from 'react'
import { Text, View } from 'react-native'
import SwipeGesture from 'react-native-swipe-gestures'

import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

const MyComponent = () => {
  const [date, setDate] = useState(new Date())
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)
  const diasDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ]

  const mesesDoAno = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const handleSwipeLeft = () => {
    // Lógica para avançar para o próximo dia
    const nextDate = new Date(date)
    nextDate.setDate(date.getDate() + 1)
    setDate(nextDate)
  }

  const handleSwipeRight = () => {
    // Lógica para voltar para o dia anterior
    const previousDate = new Date(date)
    previousDate.setDate(date.getDate() - 1)
    setDate(previousDate)
  }

  console.log(date.toLocaleDateString(), date.getDay())

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  }

  const onSwipe = (gestureName: string) => {
    switch (gestureName) {
      case 'SWIPE_LEFT':
        handleSwipeLeft()
        break
      case 'SWIPE_RIGHT':
        handleSwipeRight()
        break
    }
  }

  return (
    <SwipeGesture
      onSwipe={gestureName => onSwipe(gestureName)}
      config={config}
      style={{ flex: 1 }}
    >
      <View style={{ alignItems: 'center' }}>
        <Text style={dynamicStyles.textBody}>{`${
          diasDaSemana[date.getDay()]
        }, ${date.getDate()} de ${
          mesesDoAno[date.getMonth()]
        } de ${date.getFullYear()}`}</Text>
      </View>
    </SwipeGesture>
  )
}

export default MyComponent
