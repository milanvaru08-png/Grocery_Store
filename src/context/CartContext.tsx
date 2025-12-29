import React, { createContext, useContext, useState ,useMemo} from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  image?: any;
  qty: number;
};

type CartContextType = {
  cartItems: CartItem[];
    totalPrice: number;
  addToCart: (product: Omit<CartItem, "qty">) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
    openCheckout: () => void;
  closeCheckout: () => void;
  isCheckoutOpen:boolean;
  
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
 

  // ➕ ADD TO CART
  const addToCart = (product: Omit<CartItem, "qty">) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ➕ INCREASE QTY
  const increaseQty = (id: string) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ DECREASE QTY
  const decreaseQty = (id: string) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter(item => item.qty > 0)
    );
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  }, [cartItems]);

  // 🧾 CHECKOUT MODAL
  
const openCheckout = () => {
  setIsCheckoutOpen(true);
};

const closeCheckout = () => {
  setIsCheckoutOpen(false);
};

  
  const clearCart = () => setCartItems([]);
  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
        openCheckout,
        closeCheckout,
        isCheckoutOpen,
    
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
