import { useState } from "react";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, Text, useStyled } from "@gluestack-ui/themed";

const DatePicker = () => {
  const theme = useStyled();
  const colors = theme.config.tokens.colors;

  const [date, setDate] = useState(new Date());

  const onChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setDate(currentDate!);
  };

  const openDateModal = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: "date",
    });
  };

  return (
    <Pressable
      $active-bg="$backgroundDark50"
      w={130}
      px="$1"
      py="$2"
      borderRadius="$md"
      flexDirection="row"
      gap="$3"
      alignItems="center"
      onPress={() => openDateModal()}
    >
      <FontAwesome5
        name="calendar-alt"
        size={24}
        color={colors["primary400"]}
      />
      <Text size="md" fontWeight="$semibold">
        {date.toLocaleDateString()}
      </Text>
    </Pressable>
  );
};

export default DatePicker;
