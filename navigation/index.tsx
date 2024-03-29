import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  FontAwesome,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Settings } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import CreateCateScreen from '../screens/CreateCateScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';
import SelectSuscripcionScreen from '../screens/SelectSuscripcionScreen';
import CreatePost from '../screens/CreatePost';
import UploadImgScreen from '../screens/UploadImgScreen';
import GalleryScreen from '../screens/GalleryScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import OptionsScreen from '../screens/OptionsScreen';
import MySubsPlansScreen from '../screens/SubsPlansScreen';
import BloquearScreen from '../screens/BloquearScreen';
import CommentScreen from '../screens/CommentScreen';
import SavedScreen from '../screens/SavedScreen';
// import render from '../screens/Test';
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import PaginaInicio from '../screens/PaginaInicio';

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#F28E43',
        tabBarInactiveBackgroundColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#F28E43',
        // tabBarShowLabel:false,
        tabBarStyle: {
          position: 'absolute',
          left: 15,
          right: 15,
          borderRadius: 20,
        },
        tabBarItemStyle: {
          // Add this
          borderTopRightRadius: 20, // add border top right radius
          borderTopLeftRadius: 20, // add border top left radius
          paddingVertical: 3,
        },
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="upload"
        component={CreatePost}
        options={{
          tabBarLabel: 'Subir',
          tabBarIcon: ({ color, size }) => (
            <Feather name="upload" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="perfil"
        component={MyProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={PaginaInicio}
        // component={HomeTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Inicio"
        component={PaginaInicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={CreateCateScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChangePass"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectSusc"
        component={SelectSuscripcionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UploadImg"
        component={UploadImgScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Options"
        component={OptionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bloquear"
        component={BloquearScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MySubsPlans"
        component={MySubsPlansScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Comment"
        component={CommentScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Saved"
        component={SavedScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
/* const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={RegisterScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
/* function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
*/
