import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import View1 from './Component/View1';
import View2 from './Component/View2';

export default function App() {
  
  return (
    <View style={styles.container}>
        <View1/>
        {/* <View2/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } 
});
