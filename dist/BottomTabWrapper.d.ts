import React, { ReactNode } from "react";
import { Animated } from "react-native";
interface TabBarContextType {
    tabBarTranslateY: Animated.Value;
    slideTabBar: (direction: "up" | "down") => void;
}
export declare const TabBarVisibilityContext: React.Context<TabBarContextType | undefined>;
interface TabBarProviderProps {
    children: ReactNode;
}
export declare const BottomTabWrapper: React.FC<TabBarProviderProps>;
export {};
