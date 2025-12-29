
import React from 'react'
import { CartProvider } from './src/context/CartContext'
import { FavouriteProvider } from './src/context/FavouriteContext'

import AppNavigation from './src/navigation/AppNavigation'

const App = () => {
  return (
     <FavouriteProvider>
     <CartProvider>
      <AppNavigation />
    </CartProvider>
    </FavouriteProvider>
  )
}

export default App