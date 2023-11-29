import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignUpScreen from '../pages/SignUp/SignUpScreen';
import HomeScreen from '../pages/Home/HomeScreen';
import AnnotationDetailsScreen from '../pages/Details/AnnotationDetailsScreen';
import AddAnnotationScreen from '../pages/Add/AddAnnotationScreen';
import SettingsScreen from '../pages/Settings/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Annotation Details" component={AnnotationDetailsScreen} />
    <Tab.Screen name="Add Annotation" component={AddAnnotationScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Sign Up">
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
