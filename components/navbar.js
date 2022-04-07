import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    HStack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub, IoLogoBehance, IoLogoLinkedin } from 'react-icons/io5'
import { MenuDivider } from '@chakra-ui/react'

const LinkItem = ({ href, path, children}) => {
    const active = path === href
    const activeColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    const bgColor = useColorModeValue('purple.500', 'orange.200')
    return (
        <NextLink href={href} passHref>
            <Link
                p={2}
                borderRadius="lg"
                bg={active ? bgColor : undefined}
                color={active ? activeColor : inactiveColor}
        >
            {children}
            </Link>
        </NextLink>
    )
}

const Contact = ({path}) => { 
    return (
        <LinkItem href="/contact" path={path} >
            <Text>
                Contact
            </Text>
        </LinkItem>
    )
}

const NoContact = () => {
    return (
        <Text
            color={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            p={2}
        >
            Contact
        </Text>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter:'blur(10px'}}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>

                <HStack
                    direction={{base:'column', md:'row'}}
                    display={{base:'none', md:'flex'}}
                    width={{base:'full', md:'auto'}}
                    alignItems='center'
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                    // ms={2}
                >
                    <LinkItem href="/works" path={path}>
                    Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                    Posts
                    </LinkItem>
                    <NoContact />
                    <LinkItem
                        target="_blank"
                        href="https://github.com/CaioFaSoares"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub/>
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://www.behance.net/caiosoares1"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoBehance />
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://www.linkedin.com/in/caio-soares-3153341a1/"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoLinkedin />
                    </LinkItem>
                </HStack>
                <Box flex={1} align='right'>
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"/>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>
                                        About
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>
                                        Works
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>
                                        Posts
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/contact" passHref>
                                    <MenuItem as={Link}>
                                        Contact
                                    </MenuItem>
                                </NextLink>
                                <MenuDivider />
                                <MenuItem as={Link} href="https://github.com/CaioFaSoares" passHref>
                                        Github
                                </MenuItem>
                                <MenuItem as={Link} href="https://www.behance.net/caiosoares1" passHref>
                                        Behance
                                </MenuItem>
                                <MenuItem as={Link} href="https://www.linkedin.com/in/caio-soares-3153341a1/" passHref>
                                        Linkedin
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
        
    )
}

export default Navbar