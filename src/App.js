import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import SideDrawerCustom from './utils/customDrawer';
import { Colors } from './utils/tools';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

import { Stack, HomeStack, VideosStack } from './routes/stacks';
import AuthScreen from './components/auth';
import ProfileScreen from './components/user/profile/profile'


const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <SideDrawerCustom {...props} />}
      drawerStyle={{ backgroundColor: Colors.black }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Videos" component={VideosStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {this.props.auth.isAuth ?
              <>
                <Stack.Screen
                  name="Main"
                  component={MainDrawer}
                  options={{ headerShown: false }}
                />
              </>
              :
              <Stack.Screen
                name="AuthScreen"
                component={AuthScreen}
              />
            }
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })
export default connect(mapStateToProps)(App);


