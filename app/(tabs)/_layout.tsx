import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
      initialRouteName="index"
    >
      {/* Test with dotLottie file optimized after Lottie (JSON) export */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Lottie",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="video.fill" color={color} />
          ),
        }}
      />
      {/* Test with JS export */}
      <Tabs.Screen
        name="javascript"
        options={{
          title: "JavaScript",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="doc.text.image.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
