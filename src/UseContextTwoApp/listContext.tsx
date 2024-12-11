import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ListItem = { title: string; description: string }
// Define the shape of the context
interface ListContextType {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    list: ListItem[];
    setList: React.Dispatch<React.SetStateAction<ListItem[]>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const ListContext = createContext<ListContextType | undefined>(undefined);

// Create a provider to wrap the app and provide state to components
export const ListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [list, setList] = useState<{ title: string; description: string }[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');


    return (
        <ListContext.Provider value={{ title, setTitle, description, setDescription, list, setList, error, setError }}>
            {children}
        </ListContext.Provider>
    );
};

// Custom hook to use the app context
export const useListContext = () => {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error('useListContext must be used within an AppProvider');
    }
    return context;
};
