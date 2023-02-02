import { Box, Center, Flex } from "@chakra-ui/react";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <Flex w="100vw">
      <Center w={"100vw"} h={"200vh"}>
        <Box bgColor={"blue"} w={"100px"} h={"100px"}></Box>
      </Center>
      <Nav />
    </Flex>
  )
}
