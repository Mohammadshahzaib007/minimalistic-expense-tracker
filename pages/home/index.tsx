import Container from "@/components/container";
import { FontAwesome } from "@expo/vector-icons";
import {
  Button,
  ButtonIcon,
  Center,
  Heading,
  Text,
  View,
} from "@gluestack-ui/themed";

const HomePage = () => {
  return (
    <Container>
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mb="$2"
      >
        <Heading size="md" fontWeight={500}>This month</Heading>
        <Button bg="transparent" size="lg" borderRadius="$full">
          <FontAwesome name="search" size={20} />
        </Button>
      </View>

      {/* Spending card */}
      <View
        alignSelf="center"
        bg="$red500"
        borderRadius={100}
        paddingVertical="$2"
        paddingHorizontal="$7"
        flexDirection="row"
        gap="$4"
        alignItems="center"
      >
        <View
          w={42}
          h={42}
          borderRadius="$full"
          bg="rgba(255,255,255, .3)"
          justifyContent="center"
          alignItems="center"
          ml="-$1"
        >
          <FontAwesome name="arrow-up" size={16} color="white" />
        </View>

        <Center>
          <Text size="xs" color="$white" opacity={0.6}>
            Spending
          </Text>
          <Text size="lg" bold color="$white">
            ₹2,228
          </Text>
        </Center>
      </View>
    </Container>
  );
};

export default HomePage;
