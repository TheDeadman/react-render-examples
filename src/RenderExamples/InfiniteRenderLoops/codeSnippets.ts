// Code snippets for the MemoizedComponents example

export const codeSnippets = {
  regularChild: `import { useRef, useEffect } from 'react';
import { Paper, Typography } from '@mui/material';
import { useInfiniteLoopContext } from '../context';

const RegularChild = () => {
    const MAX_LOOPS = 25;
    const loopsRef = useRef(0);
    const { count, handleSetLastUpdated } = useInfiniteLoopContext();

    useEffect(() => {
        // Limit infinite loop for demo purposes
        if (loopsRef.current >= MAX_LOOPS || count === 0) {
            return;
        }

        loopsRef.current += 1;
        handleSetLastUpdated();
    }, [count, handleSetLastUpdated]);

    return (
        <Paper>
            <Typography>
                Infinite Loop Component
            </Typography>
            <Typography>
                ❌ Uses a non-memoized function in a useEffect causing infinite renders.
            </Typography>
        </Paper>
    );
};

export default RegularChild;`,

    context: `import React, { createContext, useContext, useState, ReactNode } from 'react';
    
    interface InfiniteLoopContextType {
        count: number;
        lastUpdated: string;
        handleIncrement: () => void;
        handleSetLastUpdated: () => void;
    }
    
    const InfiniteLoopContext = createContext<InfiniteLoopContextType | undefined>(undefined);
    
    interface InfiniteLoopProviderProps {
        children: ReactNode;
    }
    
    export const InfiniteLoopProvider: React.FC<InfiniteLoopProviderProps> = ({ children }) => {    
        const [count, setCount] = useState(0);
        const [lastUpdated, setLastUpdated] = useState(new Date().toISOString());
    
        const handleIncrement = () => setCount(count + 1);
        const handleSetLastUpdated = () => setLastUpdated(new Date().toISOString());
    
        const value = {
            count,
            lastUpdated,
            handleIncrement,
            handleSetLastUpdated
        };
    
        return (
            <InfiniteLoopContext.Provider value={value}>
                {children}
            </InfiniteLoopContext.Provider>
        );
    };
    
    export const useInfiniteLoopContext = () => {
        const context = useContext(InfiniteLoopContext);
        if (context === undefined) {
            throw new Error('useInfiniteLoopContext must be used within a InfiniteLoopProvider');
        }
        return context;
    };`,


};

export const explanations = {
  regularChild: "This component re-renders every time the parent re-renders because it's NOT wrapped in React.memo(). Without memo, React always re-renders child components when the parent re-renders, regardless of whether props have changed.",
  
  context: "This is a simple context to illustrate how you might get into an infinite render loop.",
};