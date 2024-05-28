import { FontAwesome } from "@expo/vector-icons";
import { Card, View, Heading, Text } from "@gluestack-ui/themed";

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
        <View
          w={42}
          h={42}
          borderRadius="$full"
          bg="$red300"
          justifyContent="center"
          alignItems="center"
          mr="$4"
        >
          <FontAwesome name="arrow-up" size={16} color="white" />
        </View>

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
