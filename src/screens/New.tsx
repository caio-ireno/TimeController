import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, X } from 'phosphor-react-native'
import { useState } from 'react'
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native'

import { color, ColorSelected } from '../components/ColorSelected'
import { Divider } from '../components/Divider'
import { PageDefault } from '../components/PageDefault'
import { TextInput } from '../components/TextInput'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'

export function New() {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)
  const [modalVisible, setModalVisible] = useState(false)
  const navigation = useNavigation()

  const handleHome = () => {
    navigation.navigate('home')
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
          <TextInput label="Paciente" />
        </View>

        <View
          style={{
            width: '98%',
            borderRadius: 10,
            backgroundColor: theme.menu,
            marginBottom: 16,
          }}
        >
          <TextInput label="Sala" />
          <Divider
            width={'100%'}
            height={1}
            backgroundColor={theme.backgroundColor}
          />
          <TextInput label="Prontuário" />
          <Divider
            width={'100%'}
            height={1}
            backgroundColor={theme.backgroundColor}
          />
          <TextInput label="Principal Queixa" />
        </View>

        <View
          style={{
            width: '98%',
            borderRadius: 10,
            backgroundColor: theme.menu,
            marginBottom: 16,
          }}
        >
          <TextInput label="Dia" />
          <Divider
            width={'100%'}
            height={1}
            backgroundColor={theme.backgroundColor}
          />
          <View style={{ flexDirection: 'row', width: '50%' }}>
            <TextInput label="Inicio" style={{ width: '50%' }} />
            <Divider
              width={1}
              height={'100%'}
              backgroundColor={theme.backgroundColor}
            />
            <TextInput label="Fim" style={{ width: '50%' }} />
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
            setModalVisible(true)
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  paddingVertical: 20,
                  height: '90%',
                  width: '90%',
                  backgroundColor: 'white',
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <ColorSelected />
                <Pressable
                  style={{ marginTop: 20 }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text>
                    <X />
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </PageDefault>
  )
}
