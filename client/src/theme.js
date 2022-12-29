import { extendTheme } from '@chakra-ui/react'
import { inputTheme } from './Components/input'
import { buttonTheme } from './Components/button';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            body: {
                bg: '#FFF4E8',
            },
        }),
    },
    components: { Input: inputTheme, Button: buttonTheme, },
    
});

export default theme