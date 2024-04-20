import {
  Sora_100Thin,
  Sora_400Regular,
  Sora_500Medium,
  Sora_600SemiBold,
  useFonts,
} from '@expo-google-fonts/sora'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ActivityIndicator } from 'react-native'
import HomeScreen from './src/pages/HomeScreen'
import LoginScreen from './src/pages/LoginScreen'

export type RootStackParamList = {
  Home: undefined
  Login: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  let [fontsLoaded] = useFonts({
    Sora_100Thin,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_400Regular,
  })

  if (!fontsLoaded) {
    ;<ActivityIndicator size="large" color="#00ff00" />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
