import React, { createContext, useContext, useState } from "react";

type FavouriteItem = {
   
  id: string;
  title: string;
  des: string;
  price: number;
  image?:any
};

type FavouriteContextType = {
  favourites: FavouriteItem[];
  addToFavourite: (item: FavouriteItem) => void;
  removeFromFavourite: (id: string) => void;
};

const FavouriteContext = createContext<FavouriteContextType | null>(null);

export const FavouriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favourites, setFavourites] = useState<FavouriteItem[]>([]);

  const addToFavourite = (item: FavouriteItem) => {
    setFavourites(prev => {
      const exists = prev.find(f => f.id === item.id);
      if (exists) return prev;
      return [...prev, item];
    });
  };

  const removeFromFavourite = (id: string) => {
    setFavourites(prev => prev.filter(item => item.id !== id));
  };

  return (
    <FavouriteContext.Provider value={{ favourites, addToFavourite, removeFromFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourite = () => {
  const context = useContext(FavouriteContext);
  if (!context) {
    throw new Error("useFavourite must be used inside FavouriteProvider");
  }
  return context;
};
