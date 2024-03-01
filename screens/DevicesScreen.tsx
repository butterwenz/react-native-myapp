import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DevicesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Devices Screen</Text>
      {/* Add your device listing or any other content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DevicesScreen;
