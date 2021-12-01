import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'

ReactDOM.render(
  <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </HashRouter>,
  document.getElementById('app')
)
