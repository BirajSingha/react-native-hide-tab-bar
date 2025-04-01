# React Native Hide BottomTab On Scroll

A React Native hook to hide the bottom tab bar on scroll.

## Features

- **Hide the bottom tab bar when scrolling down**
- **Show the bottom tab bar when scrolling up**
- **Uses `Animated.Value` for smooth transitions**
- **Customizable and easy to integrate with `react-native-reanimated`**

## Installation

```sh
npm install react-native-hide-tab-bar
or
yarn add react-native-hide-tab-bar
```

## Usage

### 1. Wrap Your Navigation Container with BottomTabWrapper

Wrap your bottom tab navigator or the entire app with BottomTabWrapper to provide context.

```bash
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabWrapper } from "react-native-hide-tab-bar";

const App = () => {
  return (
    <BottomTabWrapper>
       <NavigationContainer>
          {/* Your Navigation Screens */}
       </NavigationContainer>
    </BottomTabWrapper>
  );
};

export default App;
```

### 2. Implement Bottom Tab Navigation with Animated Visibility

To integrate the animated tab bar visibility into your bottom tab navigator, use the following implementation:

```bash
import {useContext} from 'react';
import { TabBarVisibilityContext } from "react-native-hide-tab-bar";

const BottomTab = () => {
  const context = useContext(TabBarVisibilityContext);
  const tabBarTranslateY = context?.tabBarTranslateY ?? 0;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle:
          {
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            transform: [{ translateY: tabBarTranslateY }],
          },
      }}
    >
      {/* Your Tab Screens */}
    </Tab.Navigator>
  );
};
```

### 3. Use useHideTabBarOnScroll Hook in Scrollable Screens

Call useHideTabBarOnScroll inside your scrollable screen components and attach the onScroll handler.

```bash
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useHideTabBarOnScroll } from "react-native-hide-tab-bar";

const ScreenA = () => {
  const { onScroll } = useHideTabBarOnScroll();

  return (
    <FlatList
      ...
      onScroll={onScroll}
      scrollEventThrottle={16}
    />
  );
};

export default ScreenA;
```

## Technologies

This project is built using the following technologies:

- **React Native** - For building cross-platform mobile applications.
- **React Navigation** - For handling navigation and bottom tab navigation.
- **React Context API** - For managing the tab bar visibility state.
- **React Native Animated API** - For smooth tab bar transitions.
- **TypeScript** - For static type checking and improved developer experience.
