
import React, { useEffect } from 'react';
import {
  View,
} from 'react-native';
import { Login,Signup } from './page/view';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from "react-native-splash-screen";
const Stack = createNativeStackNavigator();

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      border: "transparent",
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      SplashScreen.hide();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <View style={{ flex: 1 }}>
        <Login />
      </View>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Login}
          options={{title: 'Welcome'}}
        />
        {/* <Stack.Screen name="signup" component={Signup} /> */}
      {/* </Stack.Navigator> */} 
    </NavigationContainer>
  );
};

export default App;
