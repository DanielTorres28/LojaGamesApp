import React from 'react';
import {StyleSheet, View , TouchableOpacity, Image , Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Produtos from '../Component/Menu';
import Login from './Login';



export default function Principal(acao) {

        return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('../assets/SpartaVetorizado.png')}
              style={styles.imageHeader}
            />
            <Text style={[styles.text1 , {color:'orange'}]}>Sparta Games</Text>
           
            <View style={styles.textContainer}>
                <Text style={[styles.text , {color:'#fff'}]} onPress={acao}>Jogos</Text>
                <Text style={[styles.text, {color:'#fff'}]} onPress={acao}>Consoles</Text>
                <Text style={[styles.text, {color:'#fff'}]} onPress={acao}>Controles</Text>
                <TouchableOpacity style={{position:'absolute', right:0, alignSelf:'center'}}>
                  <MaterialIcons
                    name="dehaze"
                    size={24}
                    color="#fff"
                  />
                </TouchableOpacity>
            </View>
          </View>

          <View style={styles.line}/>
          
          <ScrollView>
            <Text style={[styles.text, {color:'#fff'}]}>Produtos</Text>

            <br/>
            <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
              
              <Produtos img={require('../assets/far_cry_5_P.jpg')} cost="R$: 150,00" onClick={()=> alert('Clicou')}>
                Jogo Farcry 5 PS4
              </Produtos>

              <Produtos img={require('../assets/far_cry_5_X.jpg')} cost="R$: 150,00" onClick={()=> alert('Clicou')}>
                Jogo Farcry 5 XBOX
              </Produtos>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
              <Produtos img={require('../assets/Fifa_X.jpg')} cost="R$: 100,00" onClick={()=> alert('Clicou')}>
                Jogo Fifa 21 XBOX
              </Produtos>

              <Produtos img={require('../assets/Fifa_P.jpg')} cost="R$: 100,00" onClick={()=> alert('Clicou')}>
                Jogo Fifa 21 PS4
              </Produtos>
            </View>


            <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
              <Produtos img={require('../assets/gtav_X.jpg')} cost="R$: 90,50" onClick={()=> alert('Clicou')}>
                Jogo Grand Theft Auto V XBOX
              </Produtos>

              <Produtos img={require('../assets/gtav_P.jpg')} cost="R$: 90,50" onClick={()=> alert('Clicou')}>
                Jogo Grand Theft Auto V PS4
              </Produtos>
            </View>



            <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
              <Produtos img={require('../assets/headset_gamer_hyperx_cloud_alpha_s_Blackout.jpg')} cost="R$: 620,00" onClick={()=> alert('Clicou')}>
                Headset Hyperx Cloud Blackout
              </Produtos>

              <Produtos img={require('../assets/headset_gamer_hyperX_Cloud_Stinger.jpg')} cost="R$: 320,00" onClick={()=> alert('Clicou')}>
                Headset HyperX Cloud Stinger
              </Produtos>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
              <Produtos img={require('../assets/headset_gamer_log_G430.jpg')} cost="R$: 280,00" onClick={()=> alert('Clicou')}>
                Headset Gamer logitech G432
              </Produtos>

              <Produtos img={require('../assets/headset_gamer_log_rgb_G625.jpg')} cost="R$: 890,00" onClick={()=> alert('Clicou')}>
                Headset Logitech G635 RGB
              </Produtos>
            </View>

            <View style={{ flexDirection:'row', justifyContent:'space-around' }}>
              <Produtos img={require('../assets/headset_Gamer_Log_rgb_G935.jpg')} cost="R$: 990,90" onClick={()=> alert('Clicou')}>
                Headset Gamer Logitech G935
              </Produtos>

              <Produtos img={require('../assets/headset-astro-gaming-a40.jpg')} cost="R$: 999,99" onClick={()=> alert('Clicou')}>
                Headset Astro Gaming A40
              </Produtos>
            </View>

          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex:1,  
      width:'100%',
      backgroundColor:'#34495e' 
    },
    header:{
      marginBottom: 8
    },
    imageHeader:{
      width:80,
      height:80,
      marginTop:10,
      marginLeft:200,
      justifyContent:'center'
    },
    textContainer:{
      flexDirection:'row',
      marginVertical:'5%',
      marginHorizontal:'5%'
    },
    text:{
      fontSize:26,
      marginHorizontal:'2%'
    },
    line:{
      borderBottomColor:'#fff',
      borderBottomWidth:2,

    },
    text1:{
      fontSize:26,
      marginLeft:160
    }
})
