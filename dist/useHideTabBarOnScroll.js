"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHideTabBarOnScroll = void 0;
var react_1 = require("react");
var BottomTabWrapper_1 = require("./BottomTabWrapper");
var useHideTabBarOnScroll = function () {
    var context = (0, react_1.useContext)(BottomTabWrapper_1.TabBarVisibilityContext);
    if (!context) {
        throw new Error("useHideTabBarOnScroll must be used within a TabBarVisibilityContext.Provider");
    }
    var slideTabBar = context.slideTabBar;
    var lastScrollY = (0, react_1.useRef)(0);
    var onScroll = (0, react_1.useCallback)(function (event) {
        var currentOffset = event.nativeEvent.contentOffset.y;
        var direction = currentOffset > lastScrollY.current ? "down" : "up";
        if (Math.abs(currentOffset - lastScrollY.current) > 50) {
            slideTabBar(direction);
            lastScrollY.current = currentOffset;
        }
    }, [slideTabBar]);
    return { onScroll: onScroll };
};
exports.useHideTabBarOnScroll = useHideTabBarOnScroll;
