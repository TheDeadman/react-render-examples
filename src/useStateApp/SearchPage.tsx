import React, { useState } from 'react';
import axios from 'axios';

interface SearchPageProps {
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const SearchPage: React.FC<SearchPageProps> = ({ selectedOption, setSelectedOption }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get<string[]>(
                `http://localhost:3001/search`,
                { params: { query: searchTerm } }
            );
            setResults(response.data);
        } catch (err) {
            setError('Failed to fetch search results. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h1>Search Page (useState)</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter search term"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch} disabled={isLoading}>
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {results.length > 0 && (
                <select
                    value={selectedOption || ''}
                    onChange={(e) => setSelectedOption(e.target.value)}
                >
                    <option value="" disabled>
                        Select an option
                    </option>
                    {results.map((result, index) => (
                        <option key={index} value={result}>
                            {result}
                        </option>
                    ))}
                </select>
            )}
            {selectedOption && (
                <p>
                    Selected Option: <strong>{selectedOption}</strong>
                </p>
            )}
        </div>
    );
};

export default SearchPage;
