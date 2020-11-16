import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Animated,
} from 'react-native';


const App = () => {


  const [durum, setDurum] = React.useState(false);
  const animatedVelue = React.useRef(new Animated.Value(60)).current

  const data = [
    {
      key: "1",
      category: 'deneme'
    },
    {
      key: "2",
      category: 'deneme1'
    },
    {
      key: "3",
      category: 'deneme2'
    },
    {
      key: 4,
      category: 'deneme4'
    },
    {
      key: "6",
      category: 'deneme5'
    },
    {
      key: "7",
      category: 'deneme6'
    },

  ]

  const renderItem = ({ item }) => {
    return (

      <View style={{
        width: 120,
        height: 50,
        backgroundColor: 'red',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>{item.category}</Text>
      </View>

    )

  }

  return (
    <View>
      <View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: animatedVelue
          }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            numColumns={2}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}

          />
        </Animated.View>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
          onPress={() => {
            if (durum) {
              Animated.timing(animatedVelue, {
                toValue: 60,
                duration: 300,
                useNativeDriver: false
              }).start()
            }
            else {
              Animated.timing(animatedVelue, {
                toValue: 170,
                duration: 300,
                useNativeDriver: false
              }).start()
            }

            setDurum(!durum)
          }}
        >
          <Text>{durum ? 'Kapa' : 'Ac'}</Text>
        </TouchableOpacity>
      </View>
    </View>



  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App;