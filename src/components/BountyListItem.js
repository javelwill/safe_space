import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const window = Dimensions.get('window');

const BountyListItem = ({caption, location, date, amount}) => {
  return (
    <View style={styles.card} >
      <Text style={{fontWeight: 'bold'}}>{caption}</Text>
      <Text>
        {location} {date}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{marginRight: 5, backgroundColor: '#C9CAFF', borderRadius: 3, padding: 1.5}}>
          <Text>ETH {amount.eth}</Text>
        </View>
        <View style={{marginRight: 5, backgroundColor: '#CBFDDD', borderRadius: 3, padding: 1.5}}>
          <Text>JMD {amount.jmd}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    justifyContent: 'center',

    backgroundColor: 'ghostwhite',
    borderRadius: 10,
  },
});

export default BountyListItem;
