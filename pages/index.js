import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="tomato" p={3} mt={3} mb={6} align="center">
                Hello, I&apos;m a designer and front-end developer based in Brazil!
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Caio Soares
                </Heading>
                <p>
                    Designer and Developer based in Fortaleza, Brazil.
                </p>
            </Box>
            </Box>
            
        </Container>
    )
}

export default Page