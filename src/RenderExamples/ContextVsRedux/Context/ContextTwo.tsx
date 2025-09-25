import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { useAppContextOne } from './ContextOne';

export type ListItem = { title: string; description: string }
// Define the shape of the context
interface AppContextType {
    textValTwo: string;
    combinedTextValTwo: string;
    setTextValTwo: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider to wrap the app and provide state to compTwonts
export const ContextTwoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const {textVal} = useAppContextOne();
    const [textValTwo, setTextValTwo] = useState('ContextTwo');

    const combinedTextValTwo = useMemo(() => {
        return `${textVal}-${textValTwo}`
    }, [textVal, textValTwo]);

    return (
        <AppContext.Provider value={{ textValTwo, combinedTextValTwo, setTextValTwo }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the app context
export const useAppContextTwo = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
