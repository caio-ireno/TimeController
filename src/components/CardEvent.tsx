import { Trash, Upload, X } from 'phosphor-react-native'
import React, { useState } from 'react'
import {
  Alert,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { getRealm } from '../dataBases/realm'
import { OrderType } from './DataSlide'

export const CardEvent: React.FC<Partial<OrderType>> = ({
  color,
  inicio,
  fim,
  paciente,
  data,
  prontuario,
  queixa,
  sala,
  _id,
}) => {
  const handleDelete = async (_id: string | undefined) => {
    const realm = await getRealm()
    try {
      const orderSelected = realm
        .objects<OrderType>('Order')
        .filtered(`_id = '${_id}'`)[0]

      console.log(orderSelected)

      realm.write(() => {
        realm.delete(orderSelected)
      })

      console.log(orderSelected)
    } catch {
      Alert.alert('Delete', 'Erro ao tentar deletar')
    }
  }

  const [modalCard, setModalCard] = useState(false)
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        height: 70,
        width: '95%',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        paddingHorizontal: 10,
      }}
      onPress={() => setModalCard(true)}
    >
      <View style={{ flexDirection: 'column' }}>
        <Text>{inicio}</Text>
        <Text>{fim}</Text>
      </View>
      <Text style={{ fontSize: 24, marginLeft: 10 }}>{paciente}</Text>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCard}
        onRequestClose={() => setModalCard(!modalCard)}
      >
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <View
            style={{
              paddingVertical: 20,
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
            <View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Sala:</Text>
                <Text style={{ fontSize: 18 }}> {sala}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  Principal queixa:
                </Text>
                <Text style={{ fontSize: 18 }}> {queixa}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  Prontuario:
                </Text>
                <Text style={{ fontSize: 18 }}> {prontuario}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Data:</Text>
                <Text style={{ fontSize: 18 }}> {data}</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Pressable
                style={{ marginTop: 20 }}
                onPress={() => setModalCard(!modalCard)}
              >
                <Text>
                  <X />
                </Text>
              </Pressable>

              <Pressable
                style={{ marginTop: 20 }}
                onPress={() =>
                  Alert.alert('Delete', 'Deseja deletar?', [
                    { text: 'Cancelar', style: 'cancel' },
                    {
                      text: 'Confirmar',
                      onPress: () => {
                        handleDelete(_id), setModalCard(!modalCard)
                      },
                    },
                  ])
                }
              >
                <Text>
                  <Trash />
                </Text>
              </Pressable>

              <Pressable
                style={{ marginTop: 20 }}
                onPress={() =>
                  Alert.alert('Delete', 'Deseja deletar?', [
                    { text: 'Cancelar', style: 'cancel' },
                    { text: 'Confirmar', onPress: () => handleDelete(_id) },
                  ])
                }
              >
                <Text>
                  <Upload />
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  )
}
