import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import { useAppContextOne } from './ContextOne';
import { useAppContextTwo } from './ContextTwo';
import { useAppContextThree } from './ContextThree';

export type ListItem = { title: string; description: string }

interface AppContextType {
    // textVal: string;
    // lastUpdated: number;
    // setTextVal: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const LastUpdatedProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { textVal: textValOne, lastUpdated: lastUpdatedOne } = useAppContextOne();
    const { textValTwo, lastUpdated: lastUpdatedTwo } = useAppContextTwo();
    const { textValThree, lastUpdated: lastUpdatedThree } = useAppContextThree();

    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook to use the app context
export const useLastUpdatedContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useLastUpdatedContext must be used within an AppProvider');
    }
    return context;
};
