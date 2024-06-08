import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Card, View, Heading, Text } from "@gluestack-ui/themed";
import Circle from "../circle";

const ExpenseCard = () => {
  return (
    <Card
      size="md"
      w="$full"
      variant="elevated"
      elevation="$0.5"
      bg="$white"
      paddingVertical="$3"
      flexDirection="row"
      justifyContent="space-between"
    >
      <View flexDirection="row">
        <Circle bg="$red300" mr="$4">
          <FontAwesome6 name="arrow-up-long" size={16} color="white" />
        </Circle>

        <View>
          <Heading size="md" fontWeight="$light">
            ₹100
          </Heading>
          <Text size="sm">Petrol</Text>
        </View>
      </View>

      <View alignItems="flex-end">
        <Heading size="xs" fontWeight="$light" mb="$2">
          16 May 24
        </Heading>
        <FontAwesome name="money" size={20} color="green" />
      </View>
    </Card>
  );
};

export default ExpenseCard;
