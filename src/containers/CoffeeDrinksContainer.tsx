import { FlatList, View } from 'react-native'
import DrinkCard from '../components/DrinkCard'
import { Drink } from '../types/Drinks'

interface CoffeeDrinksContainerProps {
  drinks: Drink[]
}

const CoffeeDrinksContainer = ({ drinks }: CoffeeDrinksContainerProps) => {
  return (
    <View style={{ flexDirection: 'row', paddingHorizontal: 30 }}>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 16 }}
        columnWrapperStyle={{ gap: 16 }}
        data={drinks}
        keyExtractor={(drink) => String(drink.id)}
        renderItem={({ item }) => <DrinkCard drink={item} />}
      />
    </View>
  )
}

export default CoffeeDrinksContainer
