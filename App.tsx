import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.header}>
        <Text style={styles.headerLight}>
          OOTD_EVERYDAY
        </Text>
        <Text style={styles.headerBold}>
          Posts
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#25292e',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:10,
    borderBottomWidth:1,
  },
  headerBold: {
    fontSize: 24,
    fontWeight: 'bold'

  },
  headerLight: {
    fontWeight: 'normal',
    fontSize: 12,    
  },
});
