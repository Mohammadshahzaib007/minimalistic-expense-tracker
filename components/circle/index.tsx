import { ComponentProps } from "react";
import { View } from "@gluestack-ui/themed";

type ViewProps = ComponentProps<typeof View>;

const Circle = (props: ViewProps) => {
  const { children, ...restProps } = props;
  return (
    <View
      w={42}
      h={42}
      justifyContent="center"
      alignItems="center"
      {...restProps}
      borderRadius="$full"
    >
      {children}
    </View>
  );
};

export default Circle;
