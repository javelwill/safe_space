import React, {useContext, useEffect} from 'react';
import {Context as BountyContext} from '../context/BountyContext';
import {BOUNTIES} from '../mock_data/mock_data';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StyleSheet,
} from 'react-native';
import WalletCard from '../components/WalletCard';
import BountyListItem from '../components/BountyListItem';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const window = Dimensions.get('window');

const BountyListScreen = ({navigation}) => {
  const {state, getBounties} = useContext(BountyContext);

  useEffect(() => {
    getBounties();
    const listener = navigation.addListener('didFocus', () => {
      getBounties();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.headerContentRow}>
              <Text style={[styles.h2, {color: 'white'}]}>Safe Space</Text>
              <EvilIcons
                name="user"
                size={40}
                style={{color: 'white', alignSelf: 'center'}}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.wallet}>
        <WalletCard />
      </View>

      <View
        style={{
          marginTop: 60,
          paddingHorizontal: 25,
          width: '100%',
        }}>
        <Text style={{fontSize: 16}}>Bounties</Text>
        <FlatList
          style={{}}
          showsVerticalScrollIndicator={false}
          data={BOUNTIES}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('BountyDetail', {id: item.id})
                }>
                <BountyListItem
                  caption={item.caption}
                  location={item.location}
                  date={item.date}
                  amount={item.amount}
                />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

BountyListScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    alignSelf: 'center',
    overflow: 'hidden',
    width: window.width,
    height: window.width / 1.7,
  },
  header: {
    width: window.width * 2,
    height: window.width * 2,
    borderRadius: window.width,
    backgroundColor: 'rgba(32,32,32,1)',
    marginLeft: -(window.width / 2),
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
  headerContent: {
    height: window.width / 1.7,
    width: window.width,
    marginLeft: window.width / 2,
    position: 'absolute',
    bottom: 0,
  },
  headerContentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 50,
  },
  wallet: {
    position: 'absolute',
    alignSelf: 'center',
    top: 160,
  },
  h2: {
    fontSize: 28,
  },
});

export default BountyListScreen;
