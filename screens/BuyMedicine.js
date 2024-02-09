import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'

const BuyMedicine = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
                <View style={styles.superimages}>
                        <Image resizeMode="stretch" source={require('../assets/buymedi.png')} />
                </View>
            <Text style={{color:"white",fontSize:16, textAlign:"justify", margin:"10%"}}>Feature Currently Unavailable</Text>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Get</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001737',
        justifyContent:'center',
        alignItems: 'center',
    },
    images: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'row' ,
    },
    superimages: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'column' ,
    },
    btn : {
        marginBottom:20,
        backgroundColor:'#FFDE59',
        borderRadius:22,
        width:160,
        alignItems: "center"
    },
    btnText: {
        color: "#052147",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});

export default BuyMedicine