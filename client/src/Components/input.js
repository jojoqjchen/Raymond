import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const pill = definePartsStyle({
    //default pill input 
    field : {
        border: '1px solid',
        borderColor: '#4F3A2B',
        background: 'white',
        borderRadius: '10rem',
        width: '35rem',
        _hover: {
            bg: '#F8F8F8',
        }
    }
  
})

export const inputTheme = defineMultiStyleConfig({variants: { pill }})