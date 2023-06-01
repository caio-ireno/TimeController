import { Text, TouchableOpacity, View } from 'react-native'

import { PageDefault } from '../components/PageDefault'
import { TextInput } from '../components/TextInput'
import { useAppThemeContext } from '../context/ThemeContext'
import { styles } from '../style/style'
import { ArrowLeft, Backpack } from 'phosphor-react-native'

export function New() {
  const { theme } = useAppThemeContext()
  const dynamicStyles = styles(theme)
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
          <TouchableOpacity>
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
            borderRadius: 10,
            backgroundColor: theme.menu,
          }}
        >
          <TextInput label="Paciente" />
          <TextInput label="Sala" />
          <TextInput label="Prontuário" />
          <TextInput label="Principal Queixa" />
        </View>
      </View>
    </PageDefault>
  )
}
