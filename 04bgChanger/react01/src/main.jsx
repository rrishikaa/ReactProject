import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'

function MyApp(){
  return (
      <div>
          <h1>Custom App | chai</h1>
      </div>
)}


const ReactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp/>
    <App/>
    
 {ReactElement}
 

  </StrictMode>
)
