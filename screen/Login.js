import React, { useState } from 'react';
import { StyleSheet, View , TouchableOpacity, Image} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/estilo';
import {Ionicons} from '@expo/vector-icons';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [ocSenha, setOcultarSenha] = useState(true)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Principal"}]
    })
  }

  const Cadastro= () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Cadastro"}]
    })
  }
  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
     <Text style={[styles.text , {color:'#fff'}]} h3>Entre com Login</Text>
     <Image
        source={require('../assets/SpartaVetorizado.png')}
        style={styles.imageTopo}
      />
     <br/>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' , color:'#101010'}}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        inputStyle={specificStyle.input}
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' , color:'#101010'}}
        rightIcon={<TouchableOpacity onPress={ () => setOcultarSenha(!ocSenha) }>
          {ocSenha ?
          <Ionicons name="eye" color="#101010" size={20}/>
        :
          <Ionicons name="eye-off" color="#101010" size={20}/>
        }   
        </TouchableOpacity>}
        onChangeText={value => setPassword(value)}
        secureTextEntry={ocSenha}
        inputStyle={specificStyle.input}
      />
      <br />
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />

      <br />
      <Button
        icon={
          <Icon
            name="user"
            size={15}
            color="white"
            />
        }
        title="Cadastrar"
        buttonStyle={specificStyle.button}
        onPress={() => Cadastro()}
        />
      </View>
  );
}


const specificStyle =StyleSheet.create({
  specificContainer:{
      backgroundColor:"#34495e",
      padding:10,
  },
  button:{
      width: "100%",
      margintop:10,
      borderRadius: '25px',
      backgroundColor:'#101010'
  },
  input:{
        color:'white',
        borderRadius:'25px',
        padding: 10,
    
  },
  image:{
    width:'100%'
  },
  imageTopo:{
    width:'80',
    height:'80',
    marginLeft:'20%'
  }
});