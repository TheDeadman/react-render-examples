import React from 'react';
import ListPage from './ListPage';
import SearchPage from './SearchPage';

interface CombinedPageProps {
    list: { title: string; description: string }[];
    setList: React.Dispatch<React.SetStateAction<{ title: string; description: string }[]>>;
    selectedOption: string | null;
    setSelectedOption: React.Dispatch<React.SetStateAction<string | null>>;
}

const CombinedPage: React.FC<CombinedPageProps> = ({ list, setList, selectedOption, setSelectedOption }) => {
    return (
        <div>
            <h1>Combined Page (useState)</h1>

            <div>
                <h2>List Section</h2>
                <ListPage list={list} setList={setList} />
            </div>

            <div>
                <h2>Search Section</h2>
                <SearchPage selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
        </div>
    );
};

export default CombinedPage;
