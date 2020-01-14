import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Button from '../components/Button.js';
import {Text} from 'native-base';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/Community.png')}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.h1}>Safe Space</Text>
        <Text style={styles.h3}>Let's Keep Our Communities Safe.</Text>
        <Text style={styles.p1}>Report Crimes Anonymously.</Text>
        <Text style={styles.p1}>Get Paid Aninymously.</Text>

        <View style={styles.buttonContainer}>
          <Button
            text="Get Started"
            textColor="#FFFFFF"
            buttonColor="#262626"
            width="90%"
            onSubmit={() => navigation.navigate('BountyList')}
          />
        </View>

      </View>
    </View>
  );
};

HomeScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: '65%',
    width: '100%',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  card: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    backgroundColor: 'ghostwhite',
    width: '100%',
    height: '40%',
    position: 'absolute',
    bottom: 0,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 30,
    elevation: 5,
    
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 15,
    alignItems: "center",
    position: "absolute",
    bottom: 10,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 36,
    marginTop: 15,
    marginBottom: 15,
  },
  h3: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  p1: {
    fontSize: 18,
  },
});

export default HomeScreen;
