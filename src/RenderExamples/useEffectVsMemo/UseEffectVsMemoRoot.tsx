import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import UseEffectParent from './useEffect/UseEffectParent';
import UseMemoParent from './useMemo/UseMemoParent';


const UseEffectVsMemoRoot: React.FC = () => {
    const [currentVersion, setCurrentVersion] = useState('useEffect')
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            <Button variant='contained' style={{margin: 2}} onClick={() => {setCurrentVersion('useEffect')}}>useEffect Versions</Button>
            <Button variant='contained' style={{margin: 2}}  onClick={() => {setCurrentVersion('useMemo')}}>useMemo Versions</Button>
            {currentVersion === 'useEffect' && <UseEffectParent />}
            {currentVersion === 'useMemo' && <UseMemoParent />}
        </Box>
    );
};

export default UseEffectVsMemoRoot;
