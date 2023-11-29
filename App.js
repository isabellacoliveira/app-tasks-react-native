import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/Home/HomeScreen';
import AnnotationDetailsScreen from './pages/Details/AnnotationDetailsScreen';
import CreateAnnotationScreen from './pages/Create/CreateAnnotationScreen';
import EditAnnotationScreen from './pages/Edit/EditAnnotationScreen';
import SignUpScreen from './pages/SignUp/SignUpScreen';
import SettingsScreen from './pages/Settings/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <NavigationContainer>
        <SignUpScreen onLogin={() => setLoggedIn(true)} />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={AnnotationDetailsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={CreateAnnotationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit"
          component={EditAnnotationScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="create" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
