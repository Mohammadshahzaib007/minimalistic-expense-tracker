import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import { Card, View, Heading, Text } from "@gluestack-ui/themed";
import Circle from "../circle";

type PropTypes = {
  amount: number;
  date: string;
  note?: string;
};

const ExpenseCard = (props: PropTypes) => {
  const { amount, date, note } = props;
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
            ₹{+amount.toFixed(2)}
          </Heading>
          <Text size="sm">{note || ""}</Text>
        </View>
      </View>

      <View alignItems="flex-end">
        <Heading size="xs" fontWeight="$light" mb="$2">
          {date}
        </Heading>
        <FontAwesome name="money" size={20} color="green" />
      </View>
    </Card>
  );
};

export default ExpenseCard;
