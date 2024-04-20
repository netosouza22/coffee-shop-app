import { Image, StyleSheet, Text, View } from 'react-native'

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerText}>
        <Text style={styles.referenceText}>Olá,</Text>
        <Text style={styles.nameText}>Neto Sousa!</Text>
      </View>
      <Image source={require('../assets/user.png')}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
})
