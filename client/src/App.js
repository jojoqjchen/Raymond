import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Home/>
      </div>
    </ChakraProvider>
  );
}

export default App;
