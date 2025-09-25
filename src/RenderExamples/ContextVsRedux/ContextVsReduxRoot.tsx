import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import ContextParent from './Context/ContextParent';
import ReduxParent from './Redux/ReduxParent';


const ContextVsReduxRoot: React.FC = () => {
    const [currentVersion, setCurrentVersion] = useState('context')
    return (
        <Box style={{ border: 'thin solid #5151d1', margin: 2, padding: 2 }} sx={{ padding: 2 }}>
            
                        <Button variant='contained' style={{margin: 2}} onClick={() => {setCurrentVersion('context')}}>Context Versions</Button>
                        <Button variant='contained' style={{margin: 2}}  onClick={() => {setCurrentVersion('redux')}}>Redux Versions</Button>
            {currentVersion === 'context' && <ContextParent />}
            {currentVersion === 'redux' && <ReduxParent />}
        </Box>
    );
};

export default ContextVsReduxRoot;
