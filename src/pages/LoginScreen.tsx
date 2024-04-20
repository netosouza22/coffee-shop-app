import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { RootStackParamList } from '../../App'

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../assets/home-bg.png')}>
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
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  bgImage: {
    width: '100%',
    zIndex: 0,
    height: '100%',
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
