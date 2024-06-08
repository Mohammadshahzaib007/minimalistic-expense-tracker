import {
  Select,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  SelectInput,
  Icon,
  SelectIcon,
  SelectTrigger,
  ChevronDownIcon,
} from "@gluestack-ui/themed";

type PropTypes = {
  options: {
    label: string;
    value: string;
  }[];
};

export default function Dropdown(props: PropTypes) {
  const { options = [] } = props;
  return (
    <Select>
      <SelectTrigger variant="underlined" size="md">
        <SelectInput placeholder="Category" />
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}
