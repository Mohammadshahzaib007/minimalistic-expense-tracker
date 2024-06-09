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
import DatePicker from "../date-picker";

const dummyOptions = [
  { label: "Persnol", value: "persnol" },
  { label: "Shopping", value: "shopping" },
  { label: "Travelling", value: "travelling" },
  { label: "Medical", value: "medical" },
  { label: "Education", value: "education" },
  { label: "Other", value: "other" },
];

type PropTypes = {
  open: boolean;
  onClose?: () => void;
  onAdd?: () => void;
  onChange: (key: string, value: string | number | Date) => void;
};

function AddExpenseBottomDialog(props: PropTypes) {
  const { open, onClose, onAdd, onChange } = props;

  return (
    <Actionsheet isOpen={open}>
      <ActionsheetBackdrop />
      <ActionsheetContent px="$4">
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>

        <VStack w="$full">
          <Heading mb="$8">Add Expense</Heading>

          <VStack gap="$3">
            <DatePicker onChange={(date) => onChange("date", date)} />

            <FormControl>
              <Input variant="underlined">
                <InputField
                  onChange={(e) => onChange("amount", +e.nativeEvent.text)}
                  keyboardType="numeric"
                  placeholder="Amount"
                />
              </Input>
            </FormControl>
            <FormControl>
              <Dropdown
                onChange={(val) => onChange("category", val)}
                options={dummyOptions}
              />
            </FormControl>
            <FormControl>
              <Input variant="underlined">
                <InputField
                  onChange={(e) => onChange("note", e.nativeEvent.text)}
                  placeholder="Add a note"
                />
              </Input>
            </FormControl>

            <HStack justifyContent="flex-end" gap="$3" mt="$3">
              <Button
                onPress={onClose}
                variant="solid"
                p="$0"
                size="sm"
                bg="$error300"
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                size="sm"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={onAdd}
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
