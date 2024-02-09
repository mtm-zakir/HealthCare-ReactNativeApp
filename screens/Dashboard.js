import React from 'react'
import { StatusBar } from 'react-native'
import {StyleSheet,Text,View,Image,TouchableOpacity,ScrollView} from 'react-native'

const Dashboard = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#001737" translucent = {true}/>
            <View style={styles.container}>
                <Text style={{color:"#FFDE59",fontSize:20, marginLeft:'5%',marginTop:'5%',marginBottom:'5%',textAlign: "center",marginRight:'5%',fontWeight: "bold"}}>Services</Text>
                <View style={styles.images}>
                    <TouchableOpacity onPress={()=>navigation.navigate('LabTest')}>
                    <Image resizeMode="stretch" style={{width:100,height:150}} source={require('../assets/labtest.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('FindDoctor')}>
                    <Image resizeMode="stretch" style={{width:100,height:150}} source={require('../assets/finddoc.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('BuyMedicine')}>
                    <Image resizeMode="stretch" style={{width:100,height:150}} source={require('../assets/buymedi.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.images}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Order Details')}>
                    <Image resizeMode="stretch" style={{width:100,height:150}} source={require('../assets/orderdeta.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('Exercises')}>
                    <Image resizeMode="stretch" style={{width:100,height:150}} source={require('../assets/exercise.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft:"5%"}} onPress={()=>navigation.navigate('Articles')}>
                    <Image resizeMode="stretch" style={{width:100,height:150}} source={require('../assets/healtharti.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={{color:"#FFDE59",fontSize:20, marginLeft:'5%',marginTop:'5%',marginBottom:'5%',textAlign: "center",marginRight:'5%',fontWeight: "bold"}}>Latest Reports</Text>
                <View style={styles.superimages}>
                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={{width:340,height:180}} source={require('../assets/report1.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image resizeMode="stretch" style={{width:340,height:180,marginTop:'5%'}} source={require('../assets/report2.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#001737',
    },
    images: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'row' ,
        marginBottom:'5%'
    },
    superimages: {
        justifyContent:'center',
        alignItems: "center",
        flexDirection: 'column' ,
        marginBottom:'5%'
    },
});

export default Dashboard