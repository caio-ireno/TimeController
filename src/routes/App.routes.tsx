import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Gear, House } from 'phosphor-react-native'

import { useAppThemeContext } from '../context/ThemeContext'
import { Home } from '../screens/Home'
import { Options } from '../screens/Options'

const { Navigator, Screen } = createBottomTabNavigator()
export const AppRoutes = () => {
  const { theme } = useAppThemeContext()

  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.buttonText,
          tabBarInactiveTintColor: theme.buttonText,
          tabBarStyle: { backgroundColor: theme.buttonBackground, height: 60 },
        }}
      >
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: House,
          }}
        />
        <Screen
          name="option"
          component={Options}
          options={{
            tabBarIcon: Gear,
          }}
        />
      </Navigator>
    </>
  )
}
