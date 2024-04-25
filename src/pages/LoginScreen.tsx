import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { RootStackParamList } from '../../App'

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 0.5 }}
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
      >
        <ImageBackground
          style={styles.bgImage}
          source={require('../assets/home-bg.png')}
        ></ImageBackground>
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Coffee so good, your taste buds will love it.</Text>
          <Text style={styles.descriptionText}>
            The best grain, the finest roast, the powerful flavor.
          </Text>

          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.push('Home')}
            style={{ borderRadius: 10, overflow: 'hidden' }}
          >
            <View style={styles.loginBtn}>
              <Text style={styles.textBtn}>Get Started</Text>
            </View>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: '100%',
    position: 'relative',
  },
  bgImage: {
    position: 'absolute',
    width: '100%',
    zIndex: 0,
    height: '84%',
  },
  infoContainer: {
    zIndex: 9,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 17,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: '600',
    letterSpacing: 1,
    maxWidth: 340,
    paddingHorizontal: 10,
    color: '#ffffff',
    fontFamily: 'Sora_500Medium',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 14,
    maxWidth: 314,
    color: '#A9A9A9',
    paddingHorizontal: 24,
    fontFamily: 'Sora_100Thin',
  },
  loginBtn: {
    alignSelf: 'stretch',
    backgroundColor: '#C67C4E',
    width: '100%',
    minWidth: 317,
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,

    paddingVertical: 16,
    paddingHorizontal: 28,
  },
  textBtn: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
})

export default LoginScreen
