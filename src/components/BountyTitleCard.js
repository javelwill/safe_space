import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const WalletCard = (props) => {
  return (
    <View style={[styles.card, props.style]}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dalton James</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Wanted for: Murder</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bounty: ETH 100 JMD 28000</Text>
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
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 20,
    elevation: 10,
    backgroundColor: 'ghostwhite',
    borderRadius: 10,
  },
});

export default WalletCard;
