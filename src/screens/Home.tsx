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

  //const [data, setdata] = useState('')

  // const diasDaSemana = [
  //   'Domingo',
  //   'Segunda-feira',
  //   'Terça-feira',
  //   'Quarta-feira',
  //   'Quinta-feira',
  //   'Sexta-feira',
  //   'Sábado',
  // ]

  // const mesesDoAno = [
  //   'Janeiro',
  //   'Fevereiro',
  //   'Março',
  //   'Abril',
  //   'Maio',
  //   'Junho',
  //   'Julho',
  //   'Agosto',
  //   'Setembro',
  //   'Outubro',
  //   'Novembro',
  //   'Dezembro',
  // ]

  // const GetData = () => {
  //   const now = new Date()
  //   const dayWeek = now.getDay() //retorna 0 a 6 - dias da semana
  //   const month = now.getMonth() // retorna 0 a 11 - meses
  //   const year = now.getFullYear()
  //   const day = now.getDate()

  //   setdata(
  //     `${diasDaSemana[dayWeek]}, ${day} de ${mesesDoAno[month]} de ${year}`,
  //   )
  // }

  return (
    <View style={dynamicStyles.container}>
      <View style={dynamicStyles.header}>
        <Text style={dynamicStyles.textHeader}>Agenda</Text>
        <Button label="+" />
      </View>
      <GestureHandlerRootView style={{ height: '100%', width: '100%' }}>
        <MyComponent />
      </GestureHandlerRootView>
    </View>
  )
}
