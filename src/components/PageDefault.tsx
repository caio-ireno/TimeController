import { useKeyboard } from '@react-native-community/hooks'
import { useNavigation } from '@react-navigation/native'
import { Gear, House } from 'phosphor-react-native'
import { TouchableOpacity, View } from 'react-native'

import { useAppThemeContext } from '../context/ThemeContext'

interface AppThemeProviderProps {
  children: React.ReactNode
}

export const PageDefault: React.FC<AppThemeProviderProps> = ({ children }) => {
  const navigation = useNavigation()
  const { theme } = useAppThemeContext()
  const keyboard = useKeyboard()
  //const [onKeyBoard, setOnKeyBoard] = useState(false)

  const handleHome = () => {
    navigation.navigate('home')
  }

  const handleOption = () => {
    navigation.navigate('option')
  }

  return (
    <View style={{ flex: 1 }}>
      {children}

      {!keyboard.keyboardShown && (
        <View
          style={{
            height: 60,
            backgroundColor: theme.buttonBackground,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={handleHome}>
            <House size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOption}>
            <Gear size={30} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
