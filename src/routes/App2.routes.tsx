import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { New } from '../screens/New'
import { Options } from '../screens/Options'

const { Navigator, Screen } = createNativeStackNavigator()
export const AppRoutes2 = () => {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="home" component={Home} />
        <Screen name="option" component={Options} />
        <Screen name="new" component={New} />
      </Navigator>
    </>
  )
}
