import { Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {

    const profilePicture = `/images/caio${useColorModeValue('', '-dark')}.png`

    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={3} mb={6} align="center">
                Hi, I&apos;m a designer and front-end developer based in Brazil
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Caio Soares
                    </Heading>
                    <p>
                        Internet Artisian (Designer and Developer). Computer engineering
                        undergraduate and iOS Developer at the Apple Developer Academy.
                    </p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                    <Image
                        borderColor="whiteAlpha.500"
                        borderWidth={1}
                        borderStyle="solid"
                        maxWidth="125px"
                        display="inline-block"
                        borderRadius="full"
                        src={profilePicture}
                        alt="Profile Picture" />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Skills
                </Heading>
                <Paragraph>
                    Paragraph 
                </Paragraph>
            </Section>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Paragraph 
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page