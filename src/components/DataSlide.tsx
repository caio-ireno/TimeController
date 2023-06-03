import { useFocusEffect } from '@react-navigation/native'
import { CalendarX } from 'phosphor-react-native'
import React, { useCallback, useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import SwipeGesture from 'react-native-swipe-gestures'

import { useAppThemeContext } from '../context/ThemeContext'
import { getRealm } from '../dataBases/realm'
import { styles } from '../style/style'
import { CardEvent } from './CardEvent'
import { ModalData } from './ModalData'

export interface OrderType {
  _id: string
  paciente: string
  sala: string
  prontuario: string
  queixa: string
  data: string
  inicio: string
  fim: string
  color: string
  created_at: string
}
const DataSlide = () => {
  const [date, setDate] = useState(new Date())
  const [arrayOrder, setArrayOrder] = useState<OrderType[]>([])
  const [modalCalendar, setModalCalendar] = useState(false)
  const [noEvent, setNoEvent] = useState(true)
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

  const fetchOrder = async () => {
    const realm = await getRealm()
    const year = date.getFullYear()
    const month = (1 + date.getMonth()).toString().padStart(2, '0') // Adiciona zero à frente do mês se for menor que 9
    const day = date.getDate().toString().padStart(2, '0') // Adiciona zero à frente do dia se for menor que 9
    const formattedDate = `${year}-${month}-${day}`
    try {
      const response = realm
        .objects<OrderType[]>('Order')
        .filtered(`data = '${formattedDate}'`)
        .toJSON()

      const convertedResponse = response.map(
        (order: Record<string, unknown>) => {
          const convertedOrder: OrderType = {
            _id: order._id as string,
            paciente: order.paciente as string,
            sala: order.sala as string,
            prontuario: order.prontuario as string,
            queixa: order.queixa as string,
            data: order.data as string,
            inicio: order.inicio as string,
            fim: order.fim as string,
            color: order.color as string,
            created_at: order.created_at as string,
          }
          return convertedOrder
        },
      )
      if (convertedResponse.length === 0) {
        setNoEvent(true)
      } else {
        setNoEvent(false)
      }
      setArrayOrder(convertedResponse)
    } catch (error) {
      console.log(error)
      Alert.alert('Evento', 'não foi possivel carregar')
    } finally {
      realm.close()
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchOrder()
    }, [date]),
  )

  console.log(noEvent)
  return (
    <SwipeGesture
      onSwipe={gestureName => onSwipe(gestureName)}
      config={config}
      style={{ flex: 1, height: '100%' }}
    >
      <TouchableOpacity
        style={{ alignItems: 'center' }}
        onPress={() => {
          setModalCalendar(true)
        }}
      >
        <Text style={dynamicStyles.textBody}>{`${
          diasDaSemana[date.getDay()]
        }, ${date.getDate()} de ${
          mesesDoAno[date.getMonth()]
        } de ${date.getFullYear()}`}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
        }}
      >
        <ModalData
          visible={modalCalendar}
          VisibleChange={() => setModalCalendar(!modalCalendar)}
        />
        {arrayOrder.map(order => {
          const newData = order.data.split('-')
          const newDateFormat = newData[2] + '-' + newData[1] + '-' + newData[0]
          return (
            <CardEvent
              key={order._id}
              color={order.color}
              inicio={order.inicio}
              fim={order.fim}
              paciente={order.paciente}
              data={newDateFormat}
              prontuario={order.prontuario}
              queixa={order.queixa}
              sala={order.sala}
              _id={order._id}
            />
          )
        })}
      </View>

      {noEvent && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <CalendarX size={100} color="#d9d9d9" />
          <Text style={{ fontSize: 20, color: '#d9d9d9' }}>Nenhum Evento</Text>
        </View>
      )}
    </SwipeGesture>
  )
}

export default DataSlide
