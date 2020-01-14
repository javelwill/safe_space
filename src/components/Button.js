import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = ({text, textColor, buttonColor, width, onSubmit}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor, width: width}]}
      onPress={onSubmit}>
      <Text style={[styles.p1, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 40,
    padding: 10,
  },
  p1: {
    fontSize: 16
  }
});

export default Button;
