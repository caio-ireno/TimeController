import { X } from 'phosphor-react-native'
import { useState } from 'react'
import { Modal, Pressable, Text, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import { DateData } from 'react-native-calendars/src/types'

interface ModalDataProps {
  visible: boolean
  VisibleChange: () => void
}

export let data = ''

export const ModalData: React.FC<ModalDataProps> = ({
  visible,
  VisibleChange,
}) => {
  const [dataMarket, setDataMarket] = useState<DateData>()

  if (dataMarket?.dateString === undefined) {
    data = ''
  } else {
    data = dataMarket.dateString
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={VisibleChange}
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
          <Calendar onDayPress={setDataMarket} />
          <Pressable style={{ marginTop: 20 }} onPress={VisibleChange}>
            <Text>
              <X />
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
