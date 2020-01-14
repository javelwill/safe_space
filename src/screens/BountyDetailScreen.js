import React, {useContext} from 'react';
import {Context as BountyContext} from '../context/BountyContext';
import {View, StyleSheet} from 'react-native';
import Button from '../components/Button.js';
import Header from '../components/ImageHeader';
import BountyTitleCard from '../components/BountyTitleCard';
import BountyDescriptionCard from '../components/BountyDescriptionCard';

const BountyDetailScreen = ({navigation}) => {
  const {state} = useContext(BountyContext);
  const bountyId = navigation.getParam('id');
  const bounty = state.find(bounty => bounty.id == bountyId);
  console.log('found', bounty);

  return (
    <View style={{flex: 1}}>
      <Header image={bounty.image} />
      <View style={styles.headerOverlay}>
        <View>
          <BountyTitleCard style={styles.titleCard} />
          <BountyDescriptionCard />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          text="Fund Bounty"
          textColor="#476655"
          buttonColor="#CBFDDD"
          width="35%"
          onSubmit={() => navigation.navigate('BountyFund', {id: bountyId})}
        />

        <Button
          text="Leave a tip"
          textColor="#FFFFFF"
          buttonColor="#262626"
          width="60%"
          onSubmit={() => navigation.navigate('BountyTip', {id: bountyId})}
        />
      </View>
    </View>
  );
};

BountyDetailScreen.navigationOptions = () => {
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
  titleCard: {marginBottom: 15},
  buttonContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    marginVertical: 15,
    bottom: 10,
  },
});

export default BountyDetailScreen;
