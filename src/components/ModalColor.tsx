import { X } from 'phosphor-react-native'
import { Modal, Pressable, Text, View } from 'react-native'

import ColorSelected from './ColorSelected'

interface modalColorProps {
  visible: boolean
  VisibleChange: () => void
}

export const ModalColor: React.FC<modalColorProps> = ({
  visible,
  VisibleChange,
}) => {
  console.log(visible)
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
