import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { useAppContextOne } from './ContextOne';
import { useAppContextTwo } from './ContextTwo';

export type ListItem = { title: string; description: string }
// Define the shape of the context
interface AppContextType {
    textValThree: string;
    combinedTextValThree: string;
    setTextValThree: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider to wrap the app and provide state to compThreents
export const ContextThreeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { combinedTextValTwo } = useAppContextTwo();
    const [textValThree, setTextValThree] = useState('ContextThree');
    const [combinedTextValThree, setCombinedTextValThree] = useState(`${combinedTextValTwo}-ContextThree`);

    useEffect(() => {
        setCombinedTextValThree(`${combinedTextValTwo}-${textValThree}`)
    }, [combinedTextValTwo, textValThree])


    return (
        <AppContext.Provider value={{ textValThree, combinedTextValThree, setTextValThree }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the app context
export const useAppContextThree = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
