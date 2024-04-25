import { TextInput as RNTextInput, StyleSheet, TouchableHighlight, View } from 'react-native'
import SearchIcon from './Icons/SearchIcon'

export function TextInput() {
  return (
    <View style={styles.inputContainer}>
      <RNTextInput
        style={styles.input}
        placeholder="Search coffee"
        placeholderTextColor="#989898"
      ></RNTextInput>
      <TouchableHighlight style={styles.searchButton}>
        <SearchIcon />
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 52,
    borderRadius: 16,

    backgroundColor: '#313131',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 4,

    fontSize: 4,
  },
  input: {
    paddingLeft: 16,
  },
  searchButton: {
    backgroundColor: '#C67C4E',
    width: 44,
    height: 44,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 12,
  },
})
