import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { withTheme } from "../core/theming";
import Divider from "./Divider";
import Icon from "./Icon";
import Touchable from "./Touchable";
import Config from "./Config";
import theme from "../styles/DefaultTheme";

type Props = {
  titleTypeStyle?: StyleProp<TextStyle>;
  titleColor: string;
  title: string;
  buttonText: string;
  dividerTopMargin?: number;
  icon: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  theme: typeof theme;
};

const Header: React.FC<Props> = ({
  titleTypeStyle,
  titleColor,
  title,
  buttonText,
  dividerTopMargin,
  icon,
  onPress,
  style,
  theme: { colors, spacing, typography },
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.topContainer}>
        <Text
          style={[
            titleTypeStyle,
            {
              color: titleColor,
              flex: 1,
            },
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        {onPress && (
          <Touchable
            style={{ alignSelf: "center", marginLeft: spacing.medium }}
            onPress={onPress}
          >
            <View style={styles.buttonContainer}>
              <Text
                style={[
                  typography.subtitle2,
                  {
                    color: colors.light,
                    marginRight: spacing.small,
                  },
                ]}
                numberOfLines={1}
              >
                {buttonText}
              </Text>
              <Icon
                name={icon}
                size={Config.headerIconSize}
                color={colors.light}
              />
            </View>
          </Touchable>
        )}
      </View>
      <Divider style={{ marginTop: dividerTopMargin || spacing.large }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default withTheme(Header);
