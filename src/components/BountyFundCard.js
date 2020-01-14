import React, {useContext} from 'react';
import {Context as BountyContext} from '../context/BountyContext';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');

const BountyFundCard = ({navigation, title, eth, address}) => {
  return (
    <View style={[styles.card]}>
      <Text style={{margin: 5, fontSize: 18}}>Your Address:</Text>
      <Text
        style={{margin: 5, fontSize: 18, fontWeight: 'bold', color: '#262626'}}>
        {address}
      </Text>

      <Text style={{margin: 5, fontSize: 18}}>Bounty Address:</Text>
      <Text
        style={{margin: 5, fontSize: 18, fontWeight: 'bold', color: '#262626'}}>
        {address}
      </Text>

      <Text style={{margin: 5, fontSize: 18}}>Fund Amount:</Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          height: 50,
          padding: 15,
          width: '100%',
          borderRadius: 50,
          borderColor: '#262626',
          borderWidth: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: window.width / 1.15,
    height: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
  },
});

export default BountyFundCard;
