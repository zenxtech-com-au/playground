import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from 'register-service-worker'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.register()