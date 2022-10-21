import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";
import { Category } from "../screens/Category";
import { House, ForkKnife, Martini, Coffee, Cookie, Confetti } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

const { Navigator, Screen } = createBottomTabNavigator()

export function TabRoutes() {
  const theme = useTheme()
  return (
    <Navigator 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: theme.COLORS.BACKGROUND_HIGHLIGHT,
        tabBarInactiveTintColor: theme.COLORS.TEXT_SECONDARY,
        tabBarStyle: {
          backgroundColor: theme.COLORS.TEXT_HIGHLIGHT,
        }
      }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <House size={size} color={color} weight="fill" />
          )
        }}
      />

      <Screen 
        name="restaurants"
        component={Category}
        options={{
          tabBarLabel: 'Restaurantes',
          tabBarIcon: ({ color, size }) => (
            <ForkKnife size={size} color={color} weight="fill" />
          )
        }}
        initialParams={{ 'slug': 'restaurants' }}
      />
      <Screen 
        name="bars"
        component={Category}
        options={{
          tabBarLabel: 'Bares',
          tabBarIcon: ({ color, size }) => (
            <Martini size={size} color={color} weight="fill" />
          )
        }}
        initialParams={{ 'slug': 'bars' }}
      />

      <Screen 
        name="coffee-shops"
        component={Category}
        options={{
          tabBarLabel: 'Cafeterias',
          tabBarIcon: ({ color, size }) => (
            <Coffee size={size} color={color} weight="fill" />
          )
        }}
        initialParams={{ 'slug': 'coffee-shops' }}
      />

      <Screen 
        name="candy-stores"
        component={Category}
        options={{
          tabBarLabel: 'Docerias',
          tabBarIcon: ({ color, size }) => (
            <Cookie size={size} color={color} weight="fill" />
          )
        }}
        initialParams={{ 'slug': 'candy-stores' }}
      />

      <Screen 
        name="entertainment"
        component={Category}
        options={{
          tabBarLabel: 'Entretenimento',
          tabBarIcon: ({ color, size }) => (
            <Confetti size={size} color={color} weight="fill" />
          )
        }}
        initialParams={{ 'slug': 'entertainment' }}
      />

    </Navigator>
  )
}