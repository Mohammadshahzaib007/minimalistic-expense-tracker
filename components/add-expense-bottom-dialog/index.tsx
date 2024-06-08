import {
  ButtonText,
  FormControlLabelText,
  VStack,
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  FormControl,
  FormControlLabel,
  Input,
  Button,
  InputField,
  Heading,
  HStack,
  ButtonIcon,
  AddIcon,
} from "@gluestack-ui/themed";
import Dropdown from "../dropdown";

const dummyOptions = [
  { label: "Persnol", value: "persnol" },
  { label: "Shopping", value: "shopping" },
  { label: "Travelling", value: "travelling" },
  { label: "Medical", value: "medical" },
  { label: "Education", value: "education" },
  { label: "Other", value: "other" },
];

function AddExpenseBottomDialog() {
  return (
    <Actionsheet isOpen={true}>
      <ActionsheetBackdrop />
      <ActionsheetContent px="$4">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <VStack w="$full">
          <Heading mb="$8">Add Expense</Heading>

          <VStack gap="$3">
            <FormControl>
              <Input variant="underlined">
                <InputField keyboardType="numeric" placeholder="Amount" />
              </Input>
            </FormControl>
            <FormControl>
              <Dropdown options={dummyOptions} />
            </FormControl>
            <FormControl>
              <Input variant="underlined">
                <InputField placeholder="Add a note" />
              </Input>
            </FormControl>

            <HStack justifyContent="flex-end" gap="$3" mt="$3">
              <Button variant="solid" p="$0" size="sm" bg="$error300">
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonText>Add </ButtonText>
                <ButtonIcon as={AddIcon} />
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </ActionsheetContent>
    </Actionsheet>
  );
}

export default AddExpenseBottomDialog;
