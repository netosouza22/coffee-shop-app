import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CoffeeType } from '../pages/HomeScreen'

interface CoffeeCategoryProps {
  coffeeTypeChoosed: CoffeeType
  handleCoffeeType: (type: CoffeeType) => void
}
export const CoffeeCategory = ({ coffeeTypeChoosed, handleCoffeeType }: CoffeeCategoryProps) => {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.pressableContainer}>
          <Pressable
            style={[
              styles.btn,
              coffeeTypeChoosed === 'hot' ? styles.selectedBtn : styles.unselectedBtn,
            ]}
            onPress={() => handleCoffeeType('hot')}
          >
            <Text
              style={[
                styles.textBtn,
                coffeeTypeChoosed === 'hot' ? styles.textBtnSelected : styles.textBtnUnSelected,
              ]}
            >
              Hot
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.btn,
              coffeeTypeChoosed === 'iced' ? styles.selectedBtn : styles.unselectedBtn,
            ]}
            onPress={() => handleCoffeeType('iced')}
          >
            <Text
              style={[
                styles.textBtn,
                coffeeTypeChoosed === 'iced' ? styles.textBtnSelected : styles.textBtnUnSelected,
              ]}
            >
              Iced
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pressableContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    width: 'auto',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 4,
    marginHorizontal: 10,
  },
  textBtn: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  textBtnSelected: {
    color: '#ffffff',
  },
  textBtnUnSelected: {
    color: '#C67C4E',
  },
  selectedBtn: {
    backgroundColor: '#C67C4E',
    color: 'white',
  },
  unselectedBtn: {
    backgroundColor: 'white',
    color: '#C67C4E',
  },
})
