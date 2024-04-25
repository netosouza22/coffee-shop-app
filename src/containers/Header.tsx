import { Image, StyleSheet, Text, View } from 'react-native'
import { TextInput } from '../components/TextInput'

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInfo}>
        <View style={styles.headerText}>
          <Text style={styles.referenceText}>Olá,</Text>
          <Text style={styles.nameText}>Neto Sousa!</Text>
        </View>
        <Image style={{ height: 44 }} source={require('../assets/user.png')}></Image>
      </View>
      <View style={styles.headerSearchInput}>
        <TextInput></TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 280,
    gap: 24,
  },
  headerInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {},
  referenceText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#B7B7B7',
  },
  nameText: {
    fontWeight: '400',
    fontSize: 14,
    color: '#DDDDDD',
  },
  headerSearchInput: {},
})
