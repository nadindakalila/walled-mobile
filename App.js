import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
// const img = require("./loginImg.png");
import Box from './components/Box';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    nama: 'Adityo Gizwanda',
    jenis: 'Transfer',
    tanggal: '08 December 2024',
    nominal: '-75.000,00'
  },
  {
    nama: 'Adityo Gizwanda',
    jenis: 'Topup',
    tanggal: '08 December 2024',
    nominal: '+75.000,00'
  },
  {
    nama: 'Adityo Gizwanda',
    jenis: 'Transfer',
    tanggal: '08 December 2024',
    nominal: '-75.000,00'
  },
  {
    nama: 'Adityo Gizwanda',
    jenis: 'Transfer',
    tanggal: '08 December 2024',
    nominal: '-75.000,00'
  },
]


export default function App() {
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* <Text style={{alignItems: 'center'}}>Hello <Text style={{color: 'white'}}> world</Text></Text> */}
        {/* <Image source={require("./Vector.png")} style={styles.logo}/>
        <Image source={require("./loginImg.png")} style={{width: "100%", height: "15%", marginTop: 20}}/> */}
        {/* <Image 
          source={{uri: "https://picsum.photos/300"}}
          style={{width: 300, height: 300}}
        /> */}

      <SafeAreaView>
            <View style={[styles.containerHead, styles.shadow]}>
            <View style={{flexDirection: 'row', display: 'flex', alignItems: 'center', height: 80, width: '100%'}}>
              <Image source={require('./foto.png')} style={{width: 46, height: 46, borderRadius:50, borderWidth:2, borderColor:'teal'}}></Image>
              <View style={{ marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>Nadinda Kalila</Text>
                <Text >Personal Account</Text>
              </View>
              <View style={{flex: 1}}>

              </View>
              {/* <Image source={require('./assets/splash-icon.png')} style={{width: 46, height: 46}}></Image> */}
              <Icon name="sunny" color={'orange'} size={30}/>
            </View>
          </View>
      </SafeAreaView>

        <View style={{flexDirection: 'row', marginHorizontal: 15, marginBottom: 10}}>
        <View style={styles.hero}>
          <Text style={styles.title}>Good Morning, Nadinda</Text>
          <Text style={styles.desc}>Check all your incoming and outgoing transactions here</Text>
        </View>
        <Image source={require("./Group.png")}/>
        </View>

        <Box style={{ backgroundColor: '#19918F'}}>Account No.                                             100899</Box>
        {/* mungkin bisa text didalem text, terus di flex, space between */}

        <View style={styles.balance}>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'semi-bold'}}>Balance</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rp 10.000.000</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="add" color={'white'} size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.iconButton, styles.iconSend]}>
              <Icon name="send" color={'white'} size={20}/>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 20, marginHorizontal: 15}}>Transaction History</Text>
          </View>

        </View>


        {/* <View style={[styles.button, styles.primary]}>
          <Button title='Click me' color='white' onPress={() => console.log('You call me')}/>
        </View> */}
        {/* <View style={[styles.button, styles.secondary]}>
          <Button title='Click me' color='teal' borderColor='teal' onPress={() => console.log('You call me')}/>
        </View> */}
        

        {/* <View style={styles.container}>
          <Box style={{ backgroundColor: 'lavender'}}>Box 1</Box>
          <Box style={{ backgroundColor: 'powderblue'}}>Box 2</Box>
          <Box style={{ backgroundColor: 'cadetblue'}}>Box 3</Box>
          <Box style={{ backgroundColor: 'teal'}}>Box 4</Box>
        </View> */}

        {/* <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text> */}
  
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 15,
    // flexDirection: 'column-reverse',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerHead: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  shadow: {
    shadowColor: 'gray', 
    shadowOpacity: 0.25, 
    // shadowOffset: {width: 0, height: 4}, 
    shadowRadius: 5
  },
  iconButton: {
    backgroundColor: '#19918F',
    padding: 10,
    borderRadius: 10,
  },
  iconSend:{
    marginTop: 10
  },
  balance: {
    marginHorizontal: 15, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 20, 
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 10
  },
  button: { 
    textAlign: 'center', 
    fontSize: 20, 
    paddingVertical: 10, 
    borderRadius: 10, 
    marginHorizontal: 15,
    shadowColor: '#000', 
  },
  logo: {
    marginLeft: 15, 
    marginTop: 10
  },
  text: {
    margin: 15, 
    fontSize: 16
  },
  primary: {
    backgroundColor: 'teal', 
    marginVertical: 15
  },
  secondary: {
    backgroundColor: 'white',
    borderColor: 'teal',
    fontWeight: 'medium',
    borderWidth: 1,
    marginBottom: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 16,
    fontWeight: 'medium',
    marginTop: 10
  },
  hero: {
    
  }
});
