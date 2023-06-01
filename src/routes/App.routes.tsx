import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Gear, House } from 'phosphor-react-native'

import { Home } from '../screens/Home'
import { Options } from '../screens/Options'

const { Navigator, Screen } = createBottomTabNavigator()
export const AppRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="contração"
        component={Home}
        options={{ tabBarIcon: () => <House /> }}
      />
      <Screen
        name="bolsaRota"
        component={Options}
        options={{ tabBarIcon: () => <Gear /> }}
      />
    </Navigator>
  )
}
