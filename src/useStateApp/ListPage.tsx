import React, { useState } from 'react';

interface ListItem {
    title: string;
    description: string;
}

const ListPage: React.FC = () => {
    const [list, setList] = useState<ListItem[]>([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const addItem = () => {
        setList([...list, { title, description }]);
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <h1>List Page (useState)</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button onClick={addItem}>Add to List</button>
            </form>
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
        </div>
    );
};

export default ListPage;
