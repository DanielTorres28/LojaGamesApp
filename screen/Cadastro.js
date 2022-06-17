import React,{ useState} from 'react';
import {StyleSheet, View , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../style/estilo';
import {Ionicons} from '@expo/vector-icons';
import { block } from 'react-native-reanimated';



export default function Cadastro({navigation}) {

    const [email, setEmail]= useState(null)
    const [nome, setNome]=useState(null)
    const [cpf, setCpf]=useState(null)
    const [senha, setSenha]=useState(null)
    const [errorEmail, setErrorEmail]=useState(null)
    const [errorNome, setErrorNome]=useState(null)
    const [errorCPF, setErrorCPF]=useState(null)
    const [hidePass, setHidePass]=useState(true)

      /*Validando as informações do Cadastro*/ 
    const validar = () => {
        let error = false
        setErrorEmail(null)
        setErrorCPF(null)
        if(email == null){
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
        }

        if(cpf == null){
            setErrorCPF("Preencha seu CPF")
            error = true
        }
        return !error
    } 

    
    const salvar = () => {
        if(validar()){
            console.log("Salvo");
            navigation.reset({
                index: 0,
                routes: [{name: "Login"}]
            })
        }
    }
    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
         <Text style={[styles.text , {color:'#fff'}]} h3>Cadastro</Text>
         <br />
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' , color:'#101010'}}
          onChangeText={value => {
              setEmail(value) 
              setErrorEmail(null)}}
          keyboardType="email-address"
          inputStyle={specificStyle.input}
          errorMessage={errorEmail}
        />
          
        <Input
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'user' , color:'#101010'}}
          onChangeText={value => setNome(value)}
          keyboardType="Text"
          inputStyle={specificStyle.input}
          />

        <Input
          placeholder="Cpf"
          leftIcon={{ type: 'font-awesome', name: 'envelope' , color:'#101010'}}
          onChangeText={value => { 
            setCpf(value) 
            setErrorCPF(null)
            }}
          keyboardType="number-pad"
          inputStyle={specificStyle.input}
          errorMessage={errorCPF}
          />

        <Input
          placeholder="Senha"
          leftIcon={{ type: 'font-awesome', name: 'lock' , color:'#101010'}}
          rightIcon={<TouchableOpacity onPress={ () => setHidePass(!hidePass) }>
              {hidePass ?
                <Ionicons name="eye" color="#101010" size={20}/>
            :
                <Ionicons name="eye-off" color="#101010" size={20}/>
            }   
          </TouchableOpacity>}
          onChangeText={value => setSenha(value)} 
          secureTextEntry={hidePass}
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
                title="Salvar"
                buttonStyle={specificStyle.button}
                onPress={() => salvar()}
                />
            </View>
       

    );
}

const specificStyle = StyleSheet.create({
    specificContainer:{
        backgroundColor:"#34495e",
        padding:10
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
        padding: 10
    }
})
