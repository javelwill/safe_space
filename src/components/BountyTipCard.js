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
import TipButton from '../components/TipButton';

const window = Dimensions.get('window');

const BountyTipCard = ({navigation, title, eth}) => {
  return (
    <View style={[styles.card]}>
      <Text style={styles.text}>
        Anything you share that leads to the arrest of {title} wil see to a
        reward ETH {eth} being funded to your account.
      </Text>
      <TextInput
        placeholder="What do you wish to share?"
        multiline={true}
        style={styles.textInput}
      />
      <View style={styles.buttonRow}>
        <TipButton 
          icon="md-images" 
          title="Upload Image" 
          onSubmit={() => {}} 
        />

        <TipButton 
          icon="md-play-circle" 
          title="Upload Video" 
          onSubmit={() => {}} 
        />

        <TipButton
          icon="md-volume-high"
          title="Upload Audio"
          onSubmit={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: window.width / 1.15,
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
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
  text: {
    textAlign: 'center',
    fontSize: 18,
    padding: 1,
    fontWeight: 'bold',
    margin: 15,
  },
  textInput: {
    textAlignVertical: 'top',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    height: 150,
    width: '98%',
    borderRadius: 10,
    padding: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default BountyTipCard;
