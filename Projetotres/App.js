import React, { Component }  from "react";
import{
  View,
  Text,
  StyleSheet,
  TextImput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Image,
}from 'react-native';
import{Ionicons} from "@expo/vector-icons";

class app1 extends Component{
  reader(){
    return(
      <SafeAreaView style = {style.conteiner}>
  
        <StatusBar backgroundColor ='#50C7C7' barStyle='light-content'>
          
          <View style ={Style.content} >
  
            <Text style = {style.Text}>tarefas</Text>
          
          </View>
          <View>
            <image Style = {Style.image}>
              source ={require('./assets/image3')}
            </image>
            
          </View>

	    <View>
            <image Style = {Style.image}>
              source ={require('./assets/image4')}
            </image>
            
          </View>
  
  
          <TouchableOpacity style = {style.fab}>
  
            <Ionicons name='' size =''color =''/>
          
          </TouchableOpacity>
  
        </StatusBar>
  
      </SafeAreaView>
    )
  }
  const = Style = StyleSheet.create({
    conteiner:{
      flex:1,
      backgroundColor: 'black'
    },
    title:{
      marginTop:10,
      paddingBottom:10,
      fontSize: 25,
      textAlign:'center',
      color:'white'
    },
    fab:{
      position:"absolute",
      width: 30,
      height: 30,
      backgroundColor:'black',
      alignItems: 'center',
      justifyContent:'center',
      borderRadius:30,
      right:25,
      bottom:25,
      elevation:2,
      zIndex:9,
      shadowOffset:{
        width: 1,
        height: 3,
      }
    },
    image:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
      width:15,
      height:15,
     }  
 })
}
 
export default app1;

