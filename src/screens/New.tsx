import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useState } from 'react'
import { Alert, Pressable, Text, TouchableOpacity, View } from 'react-native'
import uuid from 'react-native-uuid'

import { color } from '../components/ColorSelected'
import { Divider } from '../components/Divider'
import { ModalColor } from '../components/ModalColor'
import { data, ModalData } from '../components/ModalData'
import { PageDefault } from '../components/PageDefault'
import { TextInput } from '../components/TextInput'
import { useAppThemeContext } from '../context/ThemeContext'
import { getRealm } from '../dataBases/realm'
import { styles } from '../style/style'

export function New() {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)
  const [modalVisibleColor, setModalVisibleColor] = useState(false)
  const [modalVisibleData, setModalVisibleData] = useState(false)
  const navigation = useNavigation()

  const [paciente, setPaciente] = useState('')
  const [prontuario, setProntuario] = useState('')
  const [fim, setFim] = useState('')
  const [inicio, setInicio] = useState('')
  const [queixa, setQueixa] = useState('')
  const [sala, setSala] = useState('')

  const handleHome = () => {
    navigation.navigate('home')
  }

  const newOrderRegister = async () => {
    const realm = await getRealm()

    try {
      realm.write(() => {
        const created = realm.create('Order', {
          _id: uuid.v4(),
          color,
          data,
          paciente,
          prontuario,
          queixa,
          sala,
          fim,
          inicio,
          created_at: new Date(),
        })
        console.log(created)
      })
      Alert.alert('Agendamento', 'Agendamento criado com sucesso!!!')

      handleHome()
    } catch {
      Alert.alert('Agendamento', 'Não foi possivel criar novo agendamento')
    } finally {
      realm.close()
    }
  }
  return (
    <PageDefault>
      <View style={dynamicStyles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity onPress={handleHome}>
            <ArrowLeft size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={newOrderRegister}
            style={{
              backgroundColor: theme.buttonBackground,
              alignItems: 'center',
              justifyContent: 'center',
              height: 40,
              width: 100,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: theme.buttonText,
                textAlign: 'center',
              }}
            >
              Adicionar
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '98%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: theme.menu,
            marginBottom: 16,
          }}
        >
          <TextInput label="Paciente" onChangeText={setPaciente} />
        </View>

        <View
          style={{
            width: '98%',
            borderRadius: 10,
            backgroundColor: theme.menu,
            marginBottom: 16,
          }}
        >
          <TextInput label="Sala" onChangeText={setSala} />
          <Divider
            width={'100%'}
            height={1}
            backgroundColor={theme.backgroundColor}
          />
          <TextInput label="Prontuário" onChangeText={setProntuario} />
          <Divider
            width={'100%'}
            height={1}
            backgroundColor={theme.backgroundColor}
          />
          <TextInput label="Principal Queixa" onChangeText={setQueixa} />
        </View>

        <View
          style={{
            width: '98%',
            borderRadius: 10,
            backgroundColor: theme.menu,
            marginBottom: 16,
          }}
        >
          <TouchableOpacity
            style={{ height: 40, justifyContent: 'center' }}
            onPress={() => setModalVisibleData(true)}
          >
            <Text style={{ padding: 8, color: '#a9a' }}>
              {data ? data : 'dia'}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ModalData
              visible={modalVisibleData}
              VisibleChange={() => setModalVisibleData(!modalVisibleData)}
            />
          </View>

          <Divider
            width={'100%'}
            height={1}
            backgroundColor={theme.backgroundColor}
          />
          <View style={{ flexDirection: 'row', width: '50%' }}>
            <TextInput
              label="Inicio"
              style={{ width: '50%' }}
              onChangeText={setInicio}
            />
            <Divider
              width={1}
              height={'100%'}
              backgroundColor={theme.backgroundColor}
            />
            <TextInput
              label="Fim"
              style={{ width: '50%' }}
              onChangeText={setFim}
            />
          </View>
        </View>

        <Pressable
          style={{
            backgroundColor: color,
            height: 60,
            width: '98%',
            borderRadius: 10,
            justifyContent: 'center',
            padding: 10,
          }}
          onPress={() => {
            setModalVisibleColor(true)
          }}
        >
          <Text>Color</Text>
        </Pressable>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ModalColor
            visible={modalVisibleColor}
            VisibleChange={() => setModalVisibleColor(!modalVisibleColor)}
          />
        </View>
      </View>
    </PageDefault>
  )
}
