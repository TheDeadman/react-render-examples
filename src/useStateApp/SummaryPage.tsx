import React from 'react';
import RenderCount from '../overall/RenderCount';

interface ListItem {
    title: string;
    description: string;
}

interface SummaryPageProps {
    list: ListItem[];
    selectedOption: string | null;
}

const SummaryPage = ({ list, selectedOption }: SummaryPageProps) => {
    return (
        <div>
            <RenderCount componentName='SummaryPage' />
            <h1>Summary Page (useState)</h1>

            <div>
                <h2>List Items</h2>
                {list.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.title}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No items in the list.</p>
                )}
            </div>

            <div>
                <h2>Search Selection</h2>
                {selectedOption ? (
                    <p>
                        Selected Option: <strong>{selectedOption}</strong>
                    </p>
                ) : (
                    <p>No search option selected.</p>
                )}
            </div>
        </div>
    );
};

export default SummaryPage;
