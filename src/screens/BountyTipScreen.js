import React, {useContext} from 'react';
import {Context as BountyContext} from '../context/BountyContext';
import {View, StyleSheet} from 'react-native';
import BountyTipCard from '../components/BountyTipCard';
import ImageHeader from '../components/ImageHeader';
import Button from '../components/Button';

const BountyTipScreen = ({navigation}) => {
  const {state} = useContext(BountyContext);
  const bountyId = navigation.getParam('id');
  const bounty = state.find(bounty => bounty.id == bountyId);

  return (
    <View style={{flex: 1}}>
      <ImageHeader image={bounty.image} />
      <View style={styles.headerOverlay}>
        <BountyTipCard
          title={bounty.title}
          eth={bounty.amount.eth}
          navigation={navigation}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Submit Tip"
          textColor="white"
          width="90%"
          buttonColor="#262626"
          onSubmit={() => {
            navigation.navigate('BountyList');
          }}
        />
      </View>
    </View>
  );
};

BountyTipScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  headerOverlay: {
    position: 'absolute',
    top: 160,
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
});

export default BountyTipScreen;
