import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TipButton = ({icon, title, onSubmit}) => {
  return (
    <TouchableOpacity onPress={onSubmit}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Ionicons name={icon} size={40} />
        </View>

        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    alignItems: 'center',
  },
  circle: {
    marginHorizontal: 5,
    backgroundColor: '#D8D8D8',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});

export default TipButton;
