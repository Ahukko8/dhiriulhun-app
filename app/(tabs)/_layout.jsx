import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import { icons } from "../../constants";
// import { Loader } from '../../components'


const TabIcon = ({ icon, color, name, focused, style }) => {
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={[styles.tabIcon, style]}
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 70,
          headerShown: false,
        }
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="status"
        options={{
          title: "Status",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Status"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>

        {/* <Loader isLoading={loading} /> */}
        <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },

  tabIcon: {
    width: 24,
    height: 24,
  },
});
