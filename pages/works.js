import { Container, Text, Tag, Heading, SimpleGrid, Divider, Box, Button, useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-items'

import NextLink from 'next/link'

import thumbWhiteDOT from '../public/images/works/whitedot.png'
import thumbCidadeCauype from '../public/images/works/cidadecauype.png'

const GraphicalSection = () => {
    return (
        <Section>
            <Heading as="h3" fontSize={20} mb={6} mt={3}>
                Graphical Work
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="whitedot" title="WhiteDOT" thumbnail={thumbWhiteDOT}>
                        Brazilian streetwear brand identity for the
                        high-end "hype" consumer market.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cidadecauype" title="Cidade Cauype" thumbnail={thumbCidadeCauype}>
                        Social media work for the first smartcity in Ceará,
                        located near the ZPE.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Section>
                <Box align="center" my={4}>
                    <NextLink href="https://www.behance.net/caiosoares1">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                            See more on Behance
                        </Button>
                    </NextLink>
                </Box>
            </Section>
        </Section>
    )
}

import thumbKastor from '../public/images/works/kastor.png'

const DevelopmentSection = () => {
    return (
        <Section delay={0.2}>
                <Heading as="h3" fontSize={20} mb={6} mt={3}>
                    Development Work
                </Heading>

                <SimpleGrid columns={[1]} gap={6}>
                    <Section>
                        <WorkGridItem id="kastor" title="Kastor" thumbnail={thumbKastor}>
                            MacOS CLI tool for customizing your dock.
                            FOSS, available on Brew.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section>
                    <Box align="center" my={4}>
                        <NextLink href="https://github.com/CaioFaSoares">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme={useColorModeValue('purple', 'orange')}>
                                See more on Github
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Section>
    )
}

const Works = () => {
    return (
        <Container>
            <GraphicalSection/>
            <Section delay={0.1}>
                <Divider/>
            </Section>
            <DevelopmentSection/>
        </Container>
    )
}

export default Works