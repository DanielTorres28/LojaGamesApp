import React,{useState} from 'react';
import { StyleSheet,View , Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Button,Input,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './screen/Login';
import Principal from './screen/Principal';
import Cadastro from './screen/Cadastro';

const Stack = createStackNavigator();

function MyStack() {
  return (
    /*Options responsavel por esconder a aba da tela*/ 
    <Stack.Navigator>
      <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="Login" component={Login} />
      <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="Principal" component={Principal} />
      <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="Cadastro" component={Cadastro}/>
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}