import { Box, Text, Title } from "@mantine/core";
import CarouselHome from "../components/home/CarouselHome";

const Home = () => {

  return (
    <Box>
      <Title size="h1">Home</Title>
      <Text>This is the home page of the Mantine Portfolio.</Text>

      <CarouselHome />
    </Box>
  );
};

export default Home;