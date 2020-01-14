import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const BountyTipStatusScreen = ({navigation}) => {
  return (
    <View>
      <Text>BountyTipStatusScreen</Text>
      <Button
        title="BountyList"
        onPress={() => navigation.navigate('BountyList')}
      />
    </View>
  );
};

BountyTipStatusScreen.navigationOptions = () => {
  return {
    header: null
  }
}

const styles = StyleSheet.create({});

export default BountyTipStatusScreen;
