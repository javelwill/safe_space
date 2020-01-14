import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const WalletCard = () => {
  return (
    <View style={styles.card}>
      <Text>Your Wallet</Text>
      <Text style={{fontSize: 42, fontWeight: 'bold'}}>ETH 5.0</Text>
      <Text style={{fontSize: 24, color: 'grey'}}>JMD 360,567.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: window.width / 1.15,
    height: window.width / 3.2,
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: '#F6F6F6',
    borderRadius: 10
  },
});

export default WalletCard;
