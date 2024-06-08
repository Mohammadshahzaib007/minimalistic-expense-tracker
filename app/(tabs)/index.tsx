import HomePage from "@/pages/home";
import { HomeStateProvider } from "@/states/home";

export default function Home() {
  return (
    <HomeStateProvider>
      <HomePage />
    </HomeStateProvider>
  );
}
