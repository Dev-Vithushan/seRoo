import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './login';
import CreateAccountPage from './.expo/Components/CreateAccount';
import './server/db'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <CreateAccountPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
