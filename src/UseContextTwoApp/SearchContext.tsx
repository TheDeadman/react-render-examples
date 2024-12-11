import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface SearchContextType {

    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
    results: string[];
    setResults: React.Dispatch<React.SetStateAction<string[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context with default values
const SearchContext = createContext<SearchContextType | undefined>(undefined);

// Create a provider to wrap the app and provide state to components
export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);


    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, results, setResults, selectedOption, setSelectedOption }}>
            {children}
        </SearchContext.Provider>
    );
};

// Custom hook to use the app context
export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearchContext must be used within an AppProvider');
    }
    return context;
};
