//sombra de la caja de box-shadow
import React from 'react';
import { View, StyleSheet } from 'react-native'; //import, trae cualquier cosa de cualquier archivo

const ShadowBox = ({ children, style }) => {
  return (
    <View style={[styles.shadow, style]}>
      {children} 
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    // Para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Para Android
    elevation: 5,
    backgroundColor: 'white', 
  },
});

export default ShadowBox;
