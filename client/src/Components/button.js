import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const primary = defineStyle({
  //Default button component 
  bg: '#4F3A2B',
  color: 'white',
  borderRadius: '3xl',
  width: '15rem',
  _hover: {
    transform: 'scale(1.05, 1.05)',
  },
})

export const buttonTheme = defineStyleConfig({
  variants: { primary },
})