import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecordsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Records Screen</Text>
      {/* 在這裡放置顯示記錄信息的內容 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default RecordsScreen;
