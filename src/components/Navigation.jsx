import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" justify="space-between" wrap="wrap" p={4} bg="teal.500" color="white">
      <Box>
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/job-listings" px={2}>
          Job Listings
        </Link>
        <Link as={RouterLink} to="/candidate-profile" px={2}>
          Candidate Profile
        </Link>
        <Link as={RouterLink} to="/about-us" px={2}>
          About Us
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
