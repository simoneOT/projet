import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import View1 from './Component/View1';
import View2 from './Component/View2';

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="View1" component={View1}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <Button title="Aller vers" 
                onPress={()=>navigation.navigate("View2")}
              />
            ),
          })}
        />
        <Stack.Screen name="View2" component={View2} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } 
});
