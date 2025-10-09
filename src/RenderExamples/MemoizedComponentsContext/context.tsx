import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';

interface MemoizedComponentsContextType {
    count1: number;
    multiplier: number;
    unrelatedState: string;
    expensiveValue: number;
    handleIncrement1Bad: () => void;
    handleIncrement2: () => void;
    setMultiplier: (value: number) => void;
    setUnrelatedState: (value: string) => void;
}

const MemoizedComponentsContext = createContext<MemoizedComponentsContextType | undefined>(undefined);

interface MemoizedComponentsProviderProps {
    children: ReactNode;
}

export const MemoizedComponentsProvider: React.FC<MemoizedComponentsProviderProps> = ({ children }) => {
    const [count1, setCount1] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [unrelatedState, setUnrelatedState] = useState('');

    // Without useCallback - this creates a new function on every render
    const handleIncrement1Bad = () => setCount1(prev => prev + 1);
    
    // With useCallback - this function is memoized
    const handleIncrement2 = useCallback(() => setCount1(prev => prev + 1), []);

    // Expensive computation that only depends on count1
    const expensiveValue = useMemo(() => {
        console.log('Computing expensive value (from Context)...');
        return count1 * 1000;
    }, [count1]);

        const value = {
        count1,
        multiplier,
        unrelatedState,
        expensiveValue,
        handleIncrement1Bad,
        handleIncrement2,
        setMultiplier,
        setUnrelatedState,
    };

    return (
        <MemoizedComponentsContext.Provider value={value}>
            {children}
        </MemoizedComponentsContext.Provider>
    );
};

export const useMemoizedComponentsContext = () => {
    const context = useContext(MemoizedComponentsContext);
    if (context === undefined) {
        throw new Error('useMemoizedComponentsContext must be used within a MemoizedComponentsProvider');
    }
    return context;
};