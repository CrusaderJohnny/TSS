import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

const PlaceholderImage = require('./assets/images/left-arrow.png');
const UserBaseImage = require('./assets/images/sponge.jpg');
const MainPageImage = require('./assets/images/userpage.png');
const HomeImage = require('./assets/images/home.png');
const SearchImage = require('./assets/images/search.png');
const ReelsImage = require('./assets/images/rels.png');
const ShoppingImage = require('./assets/images/shop.png');
const UserImage = require('./assets/images/user.png');
const DotImage = require('./assets/images/ellipsis.png');




export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.subHeader}>
        <Image source={UserBaseImage} style={styles.smallUser}></Image>
        <View style={styles.subHeaderText}>
          <Text style={styles.bold}>
            ootd_everyday
          </Text>
          <Text>
            via frenchie_fry39
          </Text>
        </View>
        <View>
         <Text style={styles.dotSize}>...</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image source={MainPageImage} style={styles.mainImage}/>
      <StatusBar style="auto" />
      </View>
      <View style={styles.imageBar}>
        <Image source={HomeImage} style={styles.image}/> 
        <Image source={SearchImage} style={styles.image}/> 
        <Image source={ReelsImage} style={styles.image}/>
        <Image source={ShoppingImage} style={styles.image}/>
        <Image source={UserImage} style={styles.image}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  text: {
    color: '#000',
  },
  imageBar: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '30%',
    margin: 15,
  },
  header: {
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
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
  subHeader: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    flexDirection: 'row',
  },
  smallUser: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 5,
  },
  subHeaderText: {
    marginLeft: 10,
    marginTop: 5,
  },
  dotSize: {
    fontSize: 40,
    marginLeft: '65%',
  },
  mainImage: {
    height: 360,
    width: 360,
    //borderBottomWidth: 1,
    resizeMode: 'stretch',
  },
  //Action Bar includes the heart, comment, message, and bookmark icons
  actionBar: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  actionImage: {
    height: 33,
    width: 33,
    marginLeft: 10,
  },
  commentIcon:{
    height: 55,
    width: 55,
    marginLeft: 8,
  },
  bookmarkRight:{
    marginLeft: 160,
  },
  likedByContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  
  },
  likedByIcons:{
    height: 25,
    width: 25,
    marginLeft: 10,
  },
  likedByText:{
    fontSize: 13,
    marginLeft: 10,
  },
  commentSection: {
    fontSize: 15,
    marginTop: 3,
    marginLeft: 10,
  },
  viewDate: {
    fontSize: 10,
    marginTop: 3,
    marginLeft: 10,
  },
});
