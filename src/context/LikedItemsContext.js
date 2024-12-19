
import React, { createContext, useState, useContext } from 'react';

const LikedItemsContext = createContext();

export const LikedItemsProvider = ({ children }) => {
    const [likedItems, setLikedItems] = useState([]);

    const addLikedItem = (item) => {
        setLikedItems((prevItems) => [...prevItems, item]);
    };

    return (
        <LikedItemsContext.Provider value={{ likedItems, addLikedItem }}>
            {children}
        </LikedItemsContext.Provider>
    );
};

export const useLikedItems = () => useContext(LikedItemsContext);
