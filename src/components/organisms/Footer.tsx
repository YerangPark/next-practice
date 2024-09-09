// src/components/organisms/Footer.tsx
import React from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" width="100%" py={7} bg="brand.primary2" color="brand.text2">
      <Flex
        direction={['column', 'row']}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        px={5}
      >
        <Box textAlign={['center', 'left']} mb={[4, 0]}>
          <Text fontWeight="bold" fontSize="lg">
            © 2024 Folio
          </Text>
          <Text fontSize="sm">All rights reserved.</Text>
        </Box>
        <Flex direction="row" gap={4}>
          <Link href="#" isExternal>
            Terms
          </Link>
          <Link href="#" isExternal>
            Privacy
          </Link>
          <Link href="#" isExternal>
            Contact
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;