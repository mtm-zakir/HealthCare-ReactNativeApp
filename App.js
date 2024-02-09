import React from 'react'
import {DrawerActions} from '@react-navigation/native';
import {Image, TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FlashScreen from './screens/Flash'
import SignInScreen from './screens/SignIn'
import CreateAccScreen from './screens/CreateAcc'
import DashboardScreen from './screens/Dashboard'
import NotifiScreen from "./screens/Notifi";
import LabTestScreen from "./screens/LabTest";
import FindDoctorScreen from "./screens/FindDoctor";
import BuyMedicineScreen from "./screens/BuyMedicine";
import OrderDetailsScreen from "./screens/OrderDetails";
import ExcercisesScreen from "./screens/Excercises";
import ArticlesScreen from "./screens/Articles";

const {navigation} = createDrawerNavigator();
const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{drawerPosition: 'left'}}>
        <Drawer.Screen name="Dashboard" component={DashboardScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"HEALTH CARE",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="Flash" component={FlashScreen}
                           options={{ headerShown:false, drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="CreateAcc" component={CreateAccScreen}
                           options={{ headerShown:false, drawerItemStyle: { display: 'none' } }}/>
            <Drawer.Screen name="LabTest" component={LabTestScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"LAB TEST",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="FindDoctor" component={FindDoctorScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"FIND DOCTOR",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="BuyMedicine" component={BuyMedicineScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"BUY MEDICINE",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="OrderDetails" component={OrderDetailsScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"ORDER DETAILS",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="Excercises" component={ExcercisesScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"EXCERCISES",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="Articles" component={ArticlesScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"ARTICLES",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="Notifi" component={NotifiScreen}
                           options={{
                               headerRight: ({navigation}) => (
                                   <TouchableOpacity>
                                       <Image resizeMode="stretch" source={require("./assets/notibut.png")}/>
                                   </TouchableOpacity>
                               ),
                               headerStyle: {backgroundColor: '#001737'},
                               headerTintColor: "#FFDE59",
                               drawerStyle: {backgroundColor: '#001737',width: 180},
                               headerShown:true,title:"NOTIFICATIONS",
                               drawerActiveTintColor:"#001737",
                               drawerInactiveTintColor:"#001737",
                               drawerInactiveBackgroundColor:"#CADDFF",
                               drawerActiveBackgroundColor:"#FFDE59" }} />
            <Drawer.Screen name="SignIn" component={SignInScreen}
                           options={{ headerShown:false,title:"LOGOUT" }}/>
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default MyStack
