import { Button, Container, Box, Heading, Image, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import Head from 'next/head'

const Page = () => {

    const profilePicture = `/images/caio${useColorModeValue('', '-dark')}.png`

    return (
        <Container>
            <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3} mt={3} mb={6} align="center"
            >
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
                <Box flexShrink={0} align="center" mt={{base:4, md:0}} ml={{md:6}}>
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
                    Intro
                </Heading>
                <Paragraph>
                    Since 2020, I have worked in both marketing agencies and development
                    houses, both as a designer and developer.
                    Currently I&apos;m studying iOS development and Design Thinking at the
                    Apple Developer Academy in Fortaleza, Ceará.
                    I&apos;ve also done creative work for two brazilian Street-Wear brands and a
                    collective project called Homemade.
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Fortaleza, Ceará.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Graduated from high school.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Got accepted to study Computer Engineering at the Federal Institute of Education, Science and Technology of Ceará.
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Started working on PorCoral, a marketing agency located in Fortaleza as a designer.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Started working on Aurean, german start-up developing a CRM and Risk Management tool for supply chains as a designer and full-stack developer.
                </BioSection>
                <BioSection>
                    <BioYear>2021 to present</BioYear>
                    Got accepted into the Apple Developer Academy, located in Fortaleza, Ceará
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Paragraph>
                    Art, Design, Emulation, Games, Horror Movies, Programing, Punk Music and Tinkering
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page