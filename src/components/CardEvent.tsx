import React from 'react'
import { Text, View } from 'react-native'

import { OrderType } from './DataSlide'

export const CardEvent: React.FC<Partial<OrderType>> = ({
  color,
  inicio,
  fim,
  paciente,
}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: 70,
        width: '95%',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
      }}
    >
      <View style={{ flexDirection: 'column' }}>
        <Text>{inicio}</Text>
        <Text>{fim}</Text>
      </View>
      <Text style={{ fontSize: 24, marginLeft: 10 }}>{paciente}</Text>
    </View>
  )
}
