import { Button, useColorMode,useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

const GetInTouchButton = () => {
    return (
        <NextLink href="/contact" passHref >
            <a display={'inline-center'}>
                Get in touch
            </a>
        </NextLink>
    )
}

export default GetInTouchButton