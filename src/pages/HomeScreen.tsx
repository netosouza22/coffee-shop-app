import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Image, StyleSheet, Text, View } from 'react-native'
import { RootStackParamList } from '../../App'
import { CoffeeCategory } from '../containers/CoffeeCategory'
import { Header } from '../containers/Header'

import { LinearGradient } from 'expo-linear-gradient'
import { useCallback, useEffect, useState } from 'react'
import CoffeeDrinksContainer from '../containers/CoffeeDrinksContainer'
import { Drink } from '../types/Drinks'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type CoffeeType = 'hot' | 'iced'

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [loading, setLoading] = useState<Boolean>(false)
  const [data, setData] = useState<Drink[]>([])
  const [coffeeType, setCoffeeType] = useState<CoffeeType>('hot')

  useEffect(() => {
    console.log('coffeeType', coffeeType)
    const getData = async () => {
      setLoading(true)
      const resp = await fetch(`https://api.sampleapis.com/coffee/${coffeeType}`)
      const data: Drink[] = await resp.json()

      const responseUpdate = data.map((drink) => {
        const randomPrice = Math.random() * 1.0 + 4.0 // Preço aleatório entre 3.00 e 7.00
        const randomNote = Math.random() * 1.5 + 3.5 // Preço aleatório entre 3.00 e 5.00

        return {
          ...drink,
          note: Number(randomNote.toFixed(1)),
          price: Number(randomPrice.toFixed(2)),
        }
      })

      setData(responseUpdate)
      setLoading(false)
    }

    getData()
  }, [coffeeType])

  const handleCoffeeType = useCallback((coffeeType: CoffeeType) => {
    setCoffeeType(coffeeType)
  }, [])

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#131313', '#313131']} style={styles.headerContainer}>
        <Header />
        <View style={styles.imgBannerContainer}>
          <Image style={styles.imgBanner} source={require('../assets/banner.png')} />
        </View>
      </LinearGradient>
      <View style={styles.bodyContainer}>
        <CoffeeCategory coffeeTypeChoosed={coffeeType} handleCoffeeType={handleCoffeeType} />
        {data === undefined && loading ? (
          <Text>Loading...</Text>
        ) : (
          <CoffeeDrinksContainer drinks={data} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  headerContainer: {
    position: 'relative',
    paddingTop: 19,
    paddingBottom: 100,
    paddingHorizontal: 30,
  },
  imgBannerContainer: {
    position: 'absolute',
    minWidth: '100%',
    bottom: -70,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  imgBanner: {},
  bodyContainer: {
    paddingTop: 88,
    marginTop: 24,
    gap: 24,
  },
})

export default HomeScreen
