import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-web'

import { images } from '../constants'
import CustomButton from '../components/CustomButton'


const index = () => {
  return (
   <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{height: '100%'}}>
      <View style={styles.viewContainer}>
      <Image 
        source={images.logo}
        resizeMode='contain'
        style={styles.logo}
      />

      <View>
      <Text style={styles.intro}>މިއީ އިސްލާމީ <Text style={styles.emphasis}>ދިރިއުޅުމަކަށް</Text> އަހުލުވެރި ކުރުވަން ފެށޭ މަގެެއް</Text>
      <CustomButton
        title="ދިރިއުޅުން ފައްޓާ!"
        handlePress={() => router.push('/home')}
      />
      </View>
      </View>
    </ScrollView>
    <StatusBar 
      backgroundColor='#161622'
      style='light' 
    />
   </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    margin: 0,
    padding: 0,
    backgroundColor: '#161622',

  },
  viewContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh',
    paddingLeft: 16,
    paddingRight: 16,
  },

  logo: {
    width: '100%',
    height: '50%',
  },

  intro: {
    fontFamily: "MvIzyanreethi-Bold",
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  },

  emphasis: {
    color: '#FFA001'
  },
  begin: {
    fontFamily: "MvIzyanreethi-Bold",
    
  },
 
})