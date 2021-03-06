import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
import { Props as TextFieldProps } from "../TextField";

interface PickerOption {
  value: string;
  label: string;
}

export interface PickerComponentProps extends TextFieldProps {
  style?: StyleProp<ViewStyle>;
  options: PickerOption[];
  placeholder?: string;
  selectedValue: string;
  disabled?: boolean;
  onValueChange: (value: string, index: number) => void;
}
