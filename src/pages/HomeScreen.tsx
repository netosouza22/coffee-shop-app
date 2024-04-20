import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Image, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../../App'
import { CoffeeCategory } from '../containers/CoffeeCategory'
import { Header } from '../containers/Header'

import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import CoffeeDrinksContainer from '../containers/CoffeeDrinksContainer'
import { Drink } from '../types/Drinks'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [data, setData] = useState<Drink[]>([])
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot')
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
  }

  useEffect(() => {
    getData()
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
        <CoffeeCategory />
        {data !== undefined && <CoffeeDrinksContainer drinks={data} />}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(249, 249, 249, 1.0)',
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
    top: 100,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
  imgBanner: {},
  bodyContainer: {
    paddingTop: 88,
  },
})

export default HomeScreen
