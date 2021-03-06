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
  
        <StatusBar backgroundColor ='#C79550' barStyle='light-content'>
          
          <View style ={Style.content} >
  
            <Text style = {style.Text}>tarefas</Text>
          
          </View>
          <View>
            <image Style = {Style.image}>
              source ={require('./assets/image1')}
            </image>
            
          </View>
  
  
          <TouchableOpacity style = {style.fab}>
  
            <Ionicons name='check' size ='{30}'color ='#black'/>
          
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
      color:'#fff'
    },
    fab:{
      position:"absolute",
      width: 60,
      height: 60,
      backgroundColor:'#C75052',
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
      width:10,
      height:10,
     }  
 })
}
 
export default app1;