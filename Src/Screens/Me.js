import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Colors from '../Assets/Theme/Theme'
import CustomHeader from '../Component/CustomHeader'
import Card from '../Constant/Card'
import SliderImage from '../Constant/Slider_Image'
import Card1 from '../Constant/Card1'
import { useNavigation } from '@react-navigation/native'


const Me = () => {
  const navigation=useNavigation();
  return (
  
    <View style={styles.container}>

      
      <CustomHeader back={true} 
      notification={true} 
      filter={true} 
      scan={true}  
      source={require('../Assets/Images/Menu.png')}
      // title={'Home'}
      onPress={()=>navigation.navigate('Menu')}/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <SliderImage />
      <Text style={styles.Text_heading}>WRC Challenges</Text>
      <Card />
      <Text style={styles.Text_heading}>Trending Team</Text>
      <Card1 />
      <Text style={styles.Text_heading}>Technoxian News</Text>
      <Card />
      </ScrollView>
    </View>
 
  )
}

export default Me

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.Primary,
        paddingHorizontal:15,
        // gap:15
    },
    Text_heading:{
        color:Colors.white,
        fontFamily:'Poppins-Regular',
        fontSize:20,
        fontWeight:'500',
    }
})