import { Dimensions, FlatList, View } from 'react-native'
import DrinkCard from '../components/DrinkCard'
import { Drink } from '../types/Drinks'

const { height } = Dimensions.get('window')
interface CoffeeDrinksContainerProps {
  drinks: Drink[]
  scrollEnabled: boolean
}

const CoffeeDrinksContainer = ({ drinks, scrollEnabled }: CoffeeDrinksContainerProps) => {
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
      <FlatList
        style={{ flex: 1, maxHeight: height - 250 }}
        numColumns={2}
        contentContainerStyle={{ gap: 16 }}
        columnWrapperStyle={{ gap: 16 }}
        data={drinks}
        keyExtractor={(drink) => String(drink.id)}
        renderItem={({ item }) => <DrinkCard drink={item} />}
        nestedScrollEnabled={true}
        scrollEnabled={!scrollEnabled}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0}
      />
    </View>
  )
}

export default CoffeeDrinksContainer
