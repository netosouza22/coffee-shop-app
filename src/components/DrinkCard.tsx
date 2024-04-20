import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Drink } from '../types/Drinks'

interface DrinkCardProps {
  drink: Drink
}

const DrinkCard = ({ drink }: DrinkCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <ImageBackground style={styles.imageContainer} src={drink.image}>
          <View style={styles.note}>
            <Icon name="star" color="#FBBE21" size={12}></Icon>
            <Text style={styles.noteNumber}>{drink.note}</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.drinkDescription}>
          <Text style={styles.drinkName}>{drink.title}</Text>
          <Text style={styles.drinkIngredient}>{drink.ingredients[0]}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.price}>$ {drink.price}</Text>
          <Pressable style={styles.addBtn}>
            <FeatherIcon name="plus" color="#fff" size={16}></FeatherIcon>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    gap: 12,
    paddingTop: 4,
    paddingBottom: 12,
  },
  headerContainer: {
    width: 150,
    height: 132,
    borderRadius: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 12,
    resizeMode: 'center',
  },
  note: {
    position: 'absolute',
    top: 6,
    left: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  noteNumber: {
    color: '#fff',
    fontSize: 10,
    fontFamily: 'Sora_600SemiBold',
  },
  body: {
    width: '100%',
    paddingHorizontal: 12,
    gap: 8,
  },
  drinkDescription: {
    display: 'flex',
    gap: 4,
  },
  drinkName: {
    textAlign: 'left',
    color: '#2F2D2C',
    fontFamily: 'Sora_600SemiBold',
    fontSize: 16,
  },
  drinkIngredient: {
    textAlign: 'left',
    color: '#9B9B9B',
    fontFamily: 'Sora_400Regular',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#2F4B4E',
    fontSize: 18,
    fontFamily: 'Sora_600SemiBold',
  },
  addBtn: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    backgroundColor: '#C67C4E',
    borderRadius: 10,

    fontSize: 24,
  },
})

export default DrinkCard
