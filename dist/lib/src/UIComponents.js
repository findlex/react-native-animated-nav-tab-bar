var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Animated } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import Styled, { css } from "styled-components/native";
import { DotSize, TabButtonLayout, TabElementDisplayOptions } from "./types";
// Config
var floatingMarginBottom = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-bottom: ", "px;\n"], ["\n  margin-bottom: ", "px;\n"])), initialWindowMetrics === null || initialWindowMetrics === void 0 ? void 0 : initialWindowMetrics.insets.bottom);
var floatingMarginTop = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: ", "px;\n"], ["\n  margin-top: ", "px;\n"])), initialWindowMetrics === null || initialWindowMetrics === void 0 ? void 0 : initialWindowMetrics.insets.top);
var floatingMarginHorizontal = css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin-horizontal: 20px;\n"], ["\n  margin-horizontal: 20px;\n"])));
var floatingRoundCorner = css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  border-radius: 40px;\n"], ["\n  border-radius: 40px;\n"])));
var BottomTabBarWrapper = Styled.View(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tflex-direction: row;\n  ", ";\n\t", ";\n    elevation: 2;\n\t", ";\n  ", ";\n\t", ";\n  ", "\n  padding-top: ", "px;\n  padding-horizontal: ", "px;\n  background-color: ", ";\n\t", ";\n\n  "], ["\n\tflex-direction: row;\n  ", ";\n\t", ";\n    elevation: 2;\n\t", ";\n  ", ";\n\t", ";\n  ", "\n  padding-top: ", "px;\n  padding-horizontal: ", "px;\n  background-color: ", ";\n\t", ";\n\n  "])), function (p) { return p.floating && !!p.forcedWidth && "width: ".concat(p.forcedWidth * 100, "%"); }, function (p) { return p.floating && floatingMarginHorizontal; }, function (p) { return p.floating && (p.topPositioned ? floatingMarginTop : floatingMarginBottom); }, function (p) { return p.topPositioned && floatingMarginTop; }, function (p) { return p.floating && floatingRoundCorner; }, function (p) { return p.topPositioned
    ? "padding-bottom: ".concat(p.bottomPadding, "px")
    : p.floating
        ? "padding-bottom: ".concat(p.bottomPadding, "px")
        : "padding-bottom: ".concat((initialWindowMetrics === null || initialWindowMetrics === void 0 ? void 0 : initialWindowMetrics.insets.bottom) + p.bottomPadding, "px"); }, function (p) { return p.topPadding; }, function (p) { return p.horizontalPadding; }, function (p) { return p.tabBarBackground; }, function (p) { return p.shadow && SHADOW; });
var calculateDotSize = function (size) {
    switch (size) {
        case DotSize.SMALL:
            return 40;
        case DotSize.MEDIUM:
            return 10;
        case DotSize.LARGE:
            return 5;
        default:
            return 10;
    }
};
var TabButton = Styled.TouchableOpacity(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tflex: 1;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 100px;\n\tpadding-vertical: 10px;\n\tflex-grow: ", ";\n"], ["\n\tflex: 1;\n\tflex-direction: ", ";\n\tjustify-content: center;\n\talign-items: center;\n\tborder-radius: 100px;\n\tpadding-vertical: 10px;\n\tflex-grow: ", ";\n"])), function (p) {
    return p.tabButtonLayout == TabButtonLayout.VERTICAL
        ? "column"
        : p.tabButtonLayout == TabButtonLayout.HORIZONTAL
            ? "row"
            : "row";
}, function (p) {
    return p.focused ? p.labelLength / calculateDotSize(p.dotSize) + 1 : 1;
});
var Label = Styled(Animated.Text)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tfontSize: ", "px;\n\tcolor: ", ";\n\tmargin-left: ", "px;\n"], ["\n\tfontSize: ", "px;\n\tcolor: ", ";\n\tmargin-left: ", "px;\n"])), function (p) {
    return p.whenInactiveShow == TabElementDisplayOptions.BOTH || p.whenActiveShow == TabElementDisplayOptions.BOTH ? "14" : "17";
}, function (p) { return p.activeColor; }, function (p) {
    return (p.whenActiveShow == TabElementDisplayOptions.BOTH || p.whenInactiveShow == TabElementDisplayOptions.BOTH) &&
        p.tabButtonLayout == TabButtonLayout.HORIZONTAL
        ? 8
        : 0;
});
var Dot = Styled(Animated.View)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tposition: absolute;\n\ttop: ", "px;\n\twidth: ", "px;\n\theight: ", "px;\n\tborder-radius: ", "px;\n\tbackground-color: ", ";\n\tz-index: -1;\n"], ["\n\tposition: absolute;\n\ttop: ", "px;\n\twidth: ", "px;\n\theight: ", "px;\n\tborder-radius: ", "px;\n\tbackground-color: ", ";\n\tz-index: -1;\n"])), function (p) { return p.topPadding; }, function (p) { return p.width; }, function (p) { return p.height; }, function (p) { return p.dotCornerRadius; }, function (p) { return p.activeTabBackground; });
var SHADOW = css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  shadow-color: #000000;\n  shadow-offset: 0px 5px;\n  shadow-opacity: 0.05;\n  elevation: 1;\n  shadow-radius: 20px;\n"], ["\n  shadow-color: #000000;\n  shadow-offset: 0px 5px;\n  shadow-opacity: 0.05;\n  elevation: 1;\n  shadow-radius: 20px;\n"])));
export { BottomTabBarWrapper, TabButton, Label, Dot, SHADOW };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
