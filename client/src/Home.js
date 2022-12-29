import React from 'react';
import { Text, Center, VStack, Image, Input, Box, FormControl, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';

function Home() {
    const [input, setInput] = useState(""); // User submitted resolution
    const [result, setResult] = useState("Enter a resolution above to get Raymond's advice. "); // AI generated suggestions array of 5

    async function handleSubmit(e) {
        e.preventDefault(); // Stops default behavior
        // Sends the input over to the server 
        const response = await fetch("http://localhost:3080/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input: input,
            }),
        });
        const data = await response.json();
        // Set Result to be the response from OpenAI
        setResult(data.message);

        // Scroll screen to the generated advice 
        const element = document.getElementById("resultBox");
        element.scrollIntoView();

        // Rest input for the next search
        setInput("");
        
    }
    return (
        <div className='home'>
            <Center pt='10%' mb='20%'>
                <VStack spacing='6rem'>
                <VStack spacing='1rem'>
                    <VStack spacing='-1rem'>
                        <Image src='raymond.png' alt='Raymond the Rat' boxSize='14rem'/>
                        <Text fontSize='6xl'>raymond</Text>
                        <Text fontSize='3xl'>the resolution rat</Text>
                    </VStack>
                    <Text fontSize='md'pl='27%' pr='27%'>tell raymond one of your 2023 resolutions and he’ll give you actionable goals so you can finally follow through with them.</Text>
                    <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl>
                            <FormLabel color='#8E97A6'>This Year I want to...</FormLabel>
                            <Input 
                                variant='pill' 
                                value={input} 
                                onChange={(e) => setInput(e.target.value)}
                                placeholder='ie. get fit, meet more people, travel more... '/>
                        </FormControl>
                    </form> 
                    </Box>
                </VStack >
                <Box id='resultBox' bg='white' w='45rem' borderRadius='3xl' borderWidth='1px' borderColor='#4F3A2B' pt='2rem' pb='2rem'>
                    <Text fontSize='3xl'>Raymond suggests...</Text>
                    <Box pl='3rem' pr='3rem' pt='1rem'>
                        {result}
                    </Box>
                
                </Box>
                </VStack>
    
            </Center>
    
        </div>
    )
}

export default Home;