import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ListItem = { title: string; description: string }
// Define the shape of the context
interface FormContextType {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    results: string[];
    setResults: React.Dispatch<React.SetStateAction<string[]>>;
    error: string;
    setError: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
const FormContext = createContext<FormContextType | undefined>(undefined);

// Create a provider to wrap the app and provide state to components
export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);

    const [error, setError] = useState('');

    return (
        <FormContext.Provider value={{ title, setTitle, description, setDescription, searchTerm, setSearchTerm, results, setResults, error, setError }}>
            {children}
        </FormContext.Provider>
    );
};

// Custom hook to use the app context
export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within an AppProvider');
    }
    return context;
};
