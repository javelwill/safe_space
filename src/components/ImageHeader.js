import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const window = Dimensions.get('window');

const Header = ({image}) => {
  return (
    <View style={styles.header}>
      <View style={styles.background}>
        <Image
          style={styles.content}
          source={{uri: image}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    width: window.width,
    overflow: 'hidden',
    height: window.width / 1.48,
  },
  background: {
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: 'absolute',
    bottom: 0,
    overflow: 'hidden',
    backgroundColor: 'rgba(32,32,32,1)',
  },
  content: {
    height: window.width / 1.48,
    width: window.width,
    position: 'absolute',
    bottom: 0,
    marginLeft: window.width / 2,
  },
});

export default Header;
