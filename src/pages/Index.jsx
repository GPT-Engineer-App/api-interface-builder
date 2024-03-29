import { useState } from "react";
import { Box, Heading, Input, Button, Text, VStack, Code, Image } from "@chakra-ui/react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.example.com/data?query=${inputValue}`);
      const data = await response.json();
      setApiResponse(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiResponse(null);
    }
  };

  return (
    <Box maxWidth="600px" margin="auto" padding={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          API Interface
        </Heading>
        <Box>
          <Image src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcGklMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzExNzEyNTM2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="API Interface" />
        </Box>
        <Input placeholder="Enter your query" value={inputValue} onChange={handleInputChange} />
        <Button colorScheme="blue" onClick={fetchData}>
          Fetch Data
        </Button>
        {apiResponse && (
          <Box>
            <Heading as="h2" size="lg">
              API Response:
            </Heading>
            <Code display="block" whiteSpace="pre">
              {JSON.stringify(apiResponse, null, 2)}
            </Code>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
