import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const index = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerOne}>
        <Image style={styles.image} source={{uri:'https://cdn.getir.com/misc/emoji/house.png'}}/>
        <View style={styles.headerOneView}>
            <Text style={{fontWeight:'600', fontSize:16}}>Ev</Text>
            <Text style={{fontWeight:'500', fontSize:11.5, color:'#6E7480', marginLeft:6, marginRight:3}}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
        </View>
        <Entypo name="chevron-right" size={22} color="#5D3EBD" />
      </View>

      <View style={styles.headerTwo}>
        <Text style={{fontSize:10, fontWeight:'bold', color:'#5D3EBD'}}>TVS</Text>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#5D3EBD'}}>13<Text style={{fontSize:16}}>dk</Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerMain:{
        height: height * 0.064,
        backgroundColor:'#F7D182',
        flexDirection:'row',
    },
    headerOne:{
        height: height * 0.064,
        width: width * 0.8,
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        justifyContent:'space-between'
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        paddingLeft:8
    },
    image:{
        width:30,
        height:30,
    },
    headerTwo:{
        // backgroundColor:'red',
        width: width * 0.2,
        height: height * 0.064,
        justifyContent:'center',
        alignItems:'center',
    }
})

export default index