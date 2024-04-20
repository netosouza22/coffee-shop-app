import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

export const CoffeeCategory = () => {
  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        style={styles.container}
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {/* <View style={styles.buttonContainer}> */}

        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Hot</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.textBtn}>Iced</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    rowGap: 8,
  },
  btn: {
    flex: 1,
    backgroundColor: '#C67C4E',
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
})
