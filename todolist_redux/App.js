// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from "./components/store";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Screen3 from "./components/Screen3";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="Screen3"
            component={Screen3}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
