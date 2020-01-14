import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const WalletCard = () => {
  return (
    <View style={styles.card}>
        <Text style={{textAlign: 'center', fontSize: 18, padding: 10}}>
          Dalton James is responsible for the July 20, 2019 murder of a
          ‎third-form student who was stabbed and killed on a bus near the
          school Wednesday afternoon by a man attempting to steal his cell
          phone.
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: window.width / 1.15,
    padding: 20,
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
