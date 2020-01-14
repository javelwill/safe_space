import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BountyFundStatusScreen = ({navigation}) => {
  return (
    <View>
      <Text>BountyFundStatusScreen</Text>
      <Button
        title="BountyList"
        onPress={() => navigation.navigate('BountyList')}
      />
    </View>
  );
};

BountyFundStatusScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({});

export default BountyFundStatusScreen;
