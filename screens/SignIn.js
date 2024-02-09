import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from 'react-native'

const SignIn = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <Text style={{color:"#FFDE59",fontSize:40,fontWeight:"bold",marginBottom:10}}>Health Care</Text>
            <Text style={{color:"#CADDFF",fontSize:14, marginLeft:'5%',marginRight:'5%',marginBottom:30, textAlign:'center'}}>Enter your log in details to access your account</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>E-mail</Text>
                <TextInput style={styles.textField} placeholder={'Enter your E-mail'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>Password</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'Enter your Password'} />
            </View>
            <TouchableOpacity>
                <Text style={{color:"#CADDFF",fontSize:16, marginTop:5}}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('Dashboard')}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={{color:"#CADDFF",fontSize:16, marginTop:20}}>Don't have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('CreateAcc')}>
                <Text style={{color:"#CADDFF",fontSize:18, marginTop:5,fontWeight:"bold"}}>Create account</Text>
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
    inputContainer: {
        width: '80%',
        paddingTop:"2%",
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#CADDFF",
        padding:"4%",
        borderRadius:5,
    },
    headField: {
        marginTop:2,
        color:"#CADDFF",
        fontSize:22,
        fontWeight:"bold",
        marginBottom:10,
        marginLeft:10,
    },
    btn : {
        marginTop: 40,
        backgroundColor:'#FFDE59',
        borderRadius:5,
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

export default SignIn