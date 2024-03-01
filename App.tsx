import React, { useState } from 'react';
import { Provider as PaperProvider, BottomNavigation, Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import DevicesScreen from './screens/DevicesScreen';
import RecordsScreen from './screens/RecordsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

// Define the type for route
type Route = {
  key: string;
  title: string;
  focusedIcon: string;
};

const Stack = createStackNavigator();

export default function App() {
  const [index, setIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  const routes: Route[] = [
    { key: 'home', title: 'Home', focusedIcon: 'home-outline' },
    { key: 'devices', title: 'Devices', focusedIcon: 'devices' },
    { key: 'records', title: 'Records', focusedIcon: 'book' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    devices: DevicesScreen,
    records: RecordsScreen,
  });

  const handleLogout = () => {
    // Perform logout actions, like clearing user data from AsyncStorage or logging out from server
    setIsLoggedIn(false);
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {true ? (
            <>
              <Stack.Screen
                name="Main"
                options={{
                  headerLeft: () => (
                    <Appbar.Action icon="menu" onPress={() => {}} />
                  ),
                  headerRight: () => (
                    <Appbar.Action icon="logout" onPress={handleLogout} />
                  ),
                }}
              >
                {() => (
                  <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                  />
                )}
              </Stack.Screen>
            </>
          ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
