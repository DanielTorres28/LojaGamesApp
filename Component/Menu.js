import React from "react";
import{ StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function Produtos(props){

    function filtroDesc(desc){
        if(desc.length < 30){
            return desc;
        }
        return '${desc.substring(0,25)}...';
    }

    return (
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
                source={props.img}
                style={styles.produtoImg}
            />
            <Text style={[styles.produtoText , {color:'#fff'}]}>
                {filtroDesc(props.children)}
            </Text>
            <View opacity={0.4}>
                <Text style={[styles.produtoText , {color:'#D90429'}]}>{props.cost}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:'2%',
        alignItems:'center',
        justifyContent:'center'
    },
    produtoImg:{
        width: 175,
        height: 175,
        borderRadius: '100px'
    },
    produtoText:{
        fontSize: 16
    }
});