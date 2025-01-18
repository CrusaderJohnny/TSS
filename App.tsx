import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const PlaceholderImage = require('./assets/images/left-arrow.png');
const userBaseImage = require('./assets/images.sponge.jpg');

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.header}>
        <Image source={PlaceholderImage} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={styles.headerLight}>
            OOTD_EVERYDAY
          </Text>
          <Text style={styles.headerBold}>
            Posts
          </Text>
        </View>
      </View>
      <View style={styles.subheader}>
        <Image source={userBaseImage}></Image>
      </View>
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.tsx  to start working on your app! </Text>
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
    color: '#000',
  },
  header: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '30%',
  },
  headerBold: {
    fontSize: 24,
    fontWeight: 'bold',

  },
  headerLight: {
    fontWeight: 'normal',
    fontSize: 12,    
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
  },
  subheader: {

  },
});
