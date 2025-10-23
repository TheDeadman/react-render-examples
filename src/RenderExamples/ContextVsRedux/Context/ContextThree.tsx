// Generate Snippet
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { useAppContextTwo } from './ContextTwo';

// Remove START
export const explanation = "Placeholder";
// Remove END

export type ListItem = { title: string, description: string };

interface AppContextType {
    textValThree: string;
    lastUpdated: number;
    combinedTextValThree: string;
    setTextValThree: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const ContextThreeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // const {textVal} = useAppContextOne();
    const {combinedTextValTwo} = useAppContextTwo();
    const [textValThree, setTextValThree] = useState('ContextThree');

    const combinedTextValThree = useMemo(() => {
        return `${combinedTextValTwo}-${textValThree}`
    }, [combinedTextValTwo, textValThree]);

        const lastUpdated = useMemo(() => {
            return performance.now()
        }, [textValThree])

    return (
        <AppContext.Provider value={{ textValThree, combinedTextValThree, setTextValThree, lastUpdated }}>
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
