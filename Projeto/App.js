  import { yellow } from "chalk";
import React from "react";
  import { StyleSheet,text,view } from "react-native";

  export default function App () {
    return (
      <view styles = {styles.container}>
        <text>Meu App</text>

      </view>
    );
  }

  const Styles = StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: 'yellow',
      justifyContant: 'Center',
      alignItens: 'center',


    }
  });
