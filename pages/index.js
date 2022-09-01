import { Button, Container, Box, Heading, Image, useColorModeValue, Divider } from '@chakra-ui/react'
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
                Hi, I&apos;m a designer and iOS engineer based in Brazil
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
                    Currently I&apos;m working as Social Media for NousiFinance and studying iOS development
                    and its design pattern at the Apple Developer Academy in Fortaleza, Ceará.
                    I&apos;ve also done creative work for two brazilian streetwear brands and a
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
            <Section delay={0.1}>
                <Divider/>
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
                    Enroled in Computer Engineering at the Federal Institute of Education, Science and Technology of Ceará.
                    Started working on PorCoral, a marketing agency located in Fortaleza as a designer.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Started working on Aurean, german start-up developing a CRM and Risk Management tool for supply chains as a designer and full-stack developer.
                </BioSection>
                <BioSection>
                    <BioYear>2022 to present</BioYear>
                    Studying in the Apple Developer Academy, located in Fortaleza, Ceará
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Paragraph>
                    Art, design, emulation, games, horror movies, programming, punk music and tinkering.
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
