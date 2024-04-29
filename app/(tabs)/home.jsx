import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import  images  from '../../constants/images'

const Home = () => {
  


  return (
    <SafeAreaView style={styles.container}>
      <View> 
          <View style={styles.main}>
         
            <View>
            
            <Text style={styles.logoText}>ދިރިއުޅުން</Text>
              <Text style={styles.greeting}>
                السلام عليكم 
              </Text>
              
            </View>
            
          </View>
          
        </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100

  },
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    backgroundColor: '#161622',
  },
  item: {
    fontSize: 20,
    marginBottom: 24, 
    color: "#ffff"
  },
  main: {
    justifyContent: 'flex-end', 
    alignItems: 'space-around',
    flexDirection: 'row', 
    marginBottom: 24, 
  },
  logoText: {
    fontFamily: "MvIzyanreethi-Bold",
    fontSize: 30,
    color: "#FFA001"
  },
  greeting: {
    fontFamily: "ReemKufi-SemiBold",
    textAlign: 'left',
    fontSize: 30,
    color: '#f7fafc',
  },
  imageHolder: {
    marginTop: 24,
  }
})