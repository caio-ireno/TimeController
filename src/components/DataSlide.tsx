import React, { useState } from 'react'
import { Text, View } from 'react-native'
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  State,
} from 'react-native-gesture-handler'

const MyComponent = () => {
  const [date, setDate] = useState(new Date())
  const [gestureActive, setGestureActive] = useState(false)

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

  const handleGestureEvent = ({
    nativeEvent,
  }: PanGestureHandlerGestureEvent) => {
    if (nativeEvent.state === State.ACTIVE) {
      console.log(gestureActive, nativeEvent.state)
      if (gestureActive) {
        console.log('dentro if')
        setGestureActive(true)
        const { translationX } = nativeEvent

        if (translationX < -50) {
          handleSwipeLeft()
        } else if (translationX > 50) {
          handleSwipeRight()
        }
      }
    } else if (
      nativeEvent.state === State.END ||
      nativeEvent.state === State.CANCELLED
    ) {
      setGestureActive(false)
    }
  }

  return (
    <PanGestureHandler onGestureEvent={handleGestureEvent}>
      <View style={{ backgroundColor: '#f0f', height: '100%' }}>
        <Text>{date.toDateString()}</Text>
      </View>
    </PanGestureHandler>
  )
}

export default MyComponent
