// Generate Snippet
import React, { createContext, useContext, useState, ReactNode } from 'react';
// Remove START
export const explanation = "Placeholder";
// Remove END

export type ListItem = { title: string, description: string }

interface AppContextType {
    textVal: string;
    setTextVal: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const ContextOneProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [textVal, setTextVal] = useState('ContextOne');
    return (
        <AppContext.Provider value={{ textVal, setTextVal }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the app context
export const useAppContextOne = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
