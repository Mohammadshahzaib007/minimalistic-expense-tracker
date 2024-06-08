import { useState } from "react";
import { Heading, Pressable, Text, View, Center } from "@gluestack-ui/themed";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";

import AddExpenseBottomDialog from "@/components/add-expense-bottom-dialog";
import Circle from "@/components/circle";
import Container from "@/components/container";
import ExpenseCard from "@/components/expense-card";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <Container>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="$4"
      >
        <Heading size="md">This month</Heading>

        <Pressable>
          <FontAwesome name="search" size={20} />
        </Pressable>
      </View>

      {/* Spending card */}
      <View
        alignSelf="center"
        bg="$red500"
        borderRadius={100}
        paddingVertical="$2"
        paddingHorizontal="$5"
        flexDirection="row"
        gap="$4"
        alignItems="center"
        justifyContent="space-between"
      >
        <Circle bg="rgba(255,255,255, .3)" ml="-$1">
          <FontAwesome6 name="arrow-up-long" size={16} color="white" />
        </Circle>

        <Center>
          <Text size="xs" color="$white" opacity={0.6}>
            Spending
          </Text>
          <Text size="lg" bold color="$white">
            ₹2,228
          </Text>
        </Center>
      </View>

      <View
        marginTop="$8"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="$4"
      >
        <Heading size="md">Recent transictions</Heading>

        <Pressable>
          <Text size="sm">See all</Text>
        </Pressable>
      </View>

      {/* Expense Card */}
      <View gap="$3">
        <ExpenseCard />
        <ExpenseCard />
      </View>

      <Pressable position="absolute" bottom={100} right="$6" onPress={toggle}>
        <Circle w={54} h={54} bg="$black">
          <FontAwesome6 name="plus" size={18} color="white" />
        </Circle>
      </Pressable>

      <AddExpenseBottomDialog />

      {/* Note: Monthly budget UI needs to be added */}
    </Container>
  );
};

export default HomePage;
