import { ReactNode } from "react";
import { View } from "react-native";
import { MoreIcon } from "../../icons/MoreIcon";

interface IDropdownProps {
  open: boolean;
  itemsPosition?: "left" | "right";
  children: ReactNode | ReactNode[];
}

const Dropdown = ({
  open,
  itemsPosition = "right",
  children,
}: IDropdownProps) => {
  return (
    <View>
      <MoreIcon />
      {children}
    </View>
  );
};

export default Dropdown;
