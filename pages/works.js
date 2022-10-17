import { Container, Text, Tag, Heading, SimpleGrid, Divider, Box, Button, useColorModeValue, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'
import Layout from '../components/layouts/articles'

import NextLink from 'next/link'

import thumbKastor from '../public/images/works/kastor.png'
import thumbAlastor from '../public/images/works/alastor.png'

const DevelopmentSection = () => {
    return (
        <Section delay={0.2}>
            <Heading as="h3" fontSize={20} mb={6} mt={3}>
                Development Work
            </Heading>

            <SimpleGrid columns={[2
            ]} gap={6}>
                <Section>
                    <WorkGridItem id="alastor" title="Alastor" thumbnail={thumbAlastor} url={"https://github.com/CaioFaSoares/alastor"}>
                        IOS 15 Crypto Prices App built using SwiftUI.
                        FOSS, feel free to clone and compile.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="kastor" title="Kastor" thumbnail={thumbKastor} url={"https://github.com/CaioFaSoares/kastor"}>
                        MacOS CLI tool for customizing your dock.
                        FOSS, available on Brew.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Section>
    )
}

import thumbUUW from '../public/images/works/uuw.png'
import thumbSyrup from '../public/images/works/missingThumb.png'

const UserIntefaceSection = () => {
    return (
        <Section delay={0.2}>
            <Heading as="h3" fontSize={20} mb={6} mt={3}>
                Design Work
            </Heading>

            <SimpleGrid columns={[2]} gap={6}>
                <Section>
                    <WorkGridItem id="syrup" title="Syrup" thumbnail={thumbSyrup} url={""}>
                        iOS task management App built using UIKit. Currently under Development.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="UUW" title="Unsorted UI Works" thumbnail={thumbUUW} url={"https://www.behance.net/gallery/147226251/Unsorted-UI-Works"}>
                        Just a bunch of unsorted UIs developed between 2020 and early 2022.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Section>
    )
}

import thumbWhiteDOT from '../public/images/works/whitedot.png'
import thumbCidadeCauype from '../public/images/works/cidadecauype.png'

const GraphicalSection = () => {
    return (
        <Section>
            <Heading as="h3" fontSize={20} mb={6} mt={3}>
                Art and Social Media Work
            </Heading>

            <SimpleGrid columns={[2]} gap={6}>
                <Section>
                    <WorkGridItem id="whitedot" title="WhiteDOT" thumbnail={thumbWhiteDOT} url={"https://www.behance.net/gallery/118405161/Whitedot-Streetwear-Branding-Concept"}>
                        Brazilian streetwear brand identity for the
                        high-end "hype" consumer market.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cidadecauype" title="Cidade Cauype" thumbnail={thumbCidadeCauype} url={"https://www.behance.net/gallery/118000147/Cidade-Cauype-Primeira-SmartCity-do-Ceara"}>
                        Social media work for the first smartcity in Ceará,
                        located near the ZPE.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Section>
    )
}

const Links = () => {
    return (
        <SimpleGrid columns={[2]} gap={6}>
            <Section>
                <Box align="center" my={4}>
                    <NextLink href="https://github.com/CaioFaSoares">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
                            See more on Github
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section>
                <Box align="center" my={4}>
                    <NextLink href="https://www.behance.net/caiosoares1">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue('purple', 'orange')}>
                            See more on Behance
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </SimpleGrid>
    )
}

const Works = () => {
    return (
        <Layout>
            <Container>
                <DevelopmentSection />
                <Section delay={0.1}>
                    <Divider />
                </Section>
                <UserIntefaceSection />
                <Section delay={0.2}>
                    <Divider />
                </Section>
                <GraphicalSection />
                <Section delay={0.3}>
                    <Divider />
                </Section>
                <Links />
            </Container>
        </Layout>
    )
}

export default Works
