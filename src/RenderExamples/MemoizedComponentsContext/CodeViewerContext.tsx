import React, { useState } from 'react';
import { Box, Button, Paper, Typography, Collapse } from '@mui/material';
import { CodeBlock, dracula } from 'react-code-blocks';

interface CodeViewerContextProps {
    title: string;
    code: string;
    explanation: string;
    defaultExpanded?: boolean;
}

const CodeViewerContext: React.FC<CodeViewerContextProps> = ({ 
    title, 
    code, 
    explanation, 
    defaultExpanded = false 
}) => {
    const [expanded, setExpanded] = useState(defaultExpanded);

    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                <Typography variant="h6" component="h3">
                    {title}
                </Typography>
                <Button 
                    variant="outlined" 
                    size="small"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'Hide Code' : 'Show Code'}
                </Button>
            </Box>
            
            <Typography variant="body2" color="text.secondary" paragraph>
                {explanation}
            </Typography>

            <Collapse in={expanded}>
                <Box sx={{ mt: 2 }}>
                    <CodeBlock
                        text={code}
                        language="typescript"
                        theme={dracula}
                        showLineNumbers={false}
                    />
                </Box>
            </Collapse>
        </Paper>
    );
};

export default CodeViewerContext;