import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ListItem = { title: string; description: string }
// Define the shape of the context
interface AppContextType {
    list: ListItem[];
    setList: React.Dispatch<React.SetStateAction<{ title: string; description: string }[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with default values
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider to wrap the app and provide state to components
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [list, setList] = useState<{ title: string; description: string }[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    return (
        <AppContext.Provider value={{ list, setList, selectedOption, setSelectedOption }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the app context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
