import { useContext, useRef, useCallback } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { TabBarVisibilityContext } from "./BottomTabWrapper";

export const useHideTabBarOnScroll = () => {
  const context = useContext(TabBarVisibilityContext);

  if (!context) {
    throw new Error(
      "useHideTabBarOnScroll must be used within a TabBarVisibilityContext.Provider"
    );
  }

  const { slideTabBar } = context;
  const lastScrollY = useRef(0);

  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const currentOffset = event.nativeEvent.contentOffset.y;
      const direction = currentOffset > lastScrollY.current ? "down" : "up";

      if (Math.abs(currentOffset - lastScrollY.current) > 50) {
        slideTabBar(direction);
        lastScrollY.current = currentOffset;
      }
    },
    [slideTabBar]
  );

  return { onScroll };
};
