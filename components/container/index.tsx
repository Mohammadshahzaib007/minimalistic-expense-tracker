import { ComponentProps } from "react";
import { View } from "@gluestack-ui/themed";

type ViewProps = ComponentProps<typeof View>;

interface PropType {
  children: React.ReactNode;
}

const Container = (props: ViewProps) => {
  const { children, ...restProps } = props;
  return (
    <View flex={1} bg="$white" paddingHorizontal={16} {...restProps}>
      {children}
    </View>
  );
};

export default Container;
