import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Input, Stack, Text, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon, FaSearch, FaUserMd } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="container.xl" p={4}>
      <Flex justify="space-between" align="center" mb={10}>
        <Heading as="h1" size="xl">
          HealthRecruit
        </Heading>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
      </Flex>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading mb={4}>Find Your Dream Job in Healthcare</Heading>
          <Flex>
            <Input placeholder="Search for jobs..." />
            <Button ml={2} leftIcon={<FaSearch />}>
              Search
            </Button>
          </Flex>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Flex align="center" mb={4}>
            <FaUserMd size="3em" />
            <Heading ml={4} size="md">
              For Healthcare Professionals
            </Heading>
          </Flex>
          <Text>Join our platform to connect with hospitals and clinics worldwide. Showcase your skills and experience to find the perfect job.</Text>
          <Button mt={4} colorScheme="teal">
            Sign Up Now
          </Button>
        </Box>
        <Box align="center">
          <Heading mb={4} size="lg">
            Our Trusted Partners
          </Heading>
          <Flex justify="space-around">
            <Image boxSize="100px" objectFit="cover" src="https://images.unsplash.com/photo-1502740479091-635887520276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGxvZ298ZW58MHx8fHwxNzA5Nzc4MTg0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hospital Logo" />
            <Image boxSize="100px" objectFit="cover" src="https://images.unsplash.com/photo-1580281658626-ee379f3cce93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbGluaWMlMjBsb2dvfGVufDB8fHx8MTcwOTc3ODE4NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Clinic Logo" />
            <Image boxSize="100px" objectFit="cover" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbG9nb3xlbnwwfHx8fDE3MDk3NzgxODR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare Logo" />
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
