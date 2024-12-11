import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ListItem = { title: string; description: string }
// Define the shape of the context
interface AppContextTwoType {
    list: ListItem[];
    setList: React.Dispatch<React.SetStateAction<{ title: string; description: string }[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with default values
const AppContextTwo = createContext<AppContextTwoType | undefined>(undefined);

// Create a provider to wrap the app and provide state to components
export const AppTwoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [list, setList] = useState<{ title: string; description: string }[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <AppContextTwo.Provider value={{ list, setList, selectedOption, setSelectedOption }}>
            {children}
        </AppContextTwo.Provider>
    );
};

// Custom hook to use the app context
export const useAppContextTwo = () => {
    const context = useContext(AppContextTwo);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
