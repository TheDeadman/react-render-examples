import React from 'react';
import { Box, Card, CardContent, CardActions, Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import RenderCount from './overall/RenderCount';

interface TechniqueCardProps {
    title: string;
    description: string;
    route: string;
    isImplemented?: boolean;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ title, description, route, isImplemented = true }) => {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                {isImplemented ? (
                    <Button 
                        size="small" 
                        variant="contained" 
                        component={Link} 
                        to={route}
                        fullWidth
                    >
                        Explore Example
                    </Button>
                ) : (
                    <Button 
                        size="small" 
                        variant="outlined" 
                        disabled
                        fullWidth
                    >
                        Coming Soon
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

const RenderOptimizationLanding: React.FC = () => {
    const techniques = [
        {
            title: "Memoized Components",
            description: "React.memo, useMemo, and useCallback can prevent unnecessary re-renders and optimize component performance.",
            route: "/memoized-components",
            isImplemented: true
        },
        {
            title: "Memoized Components (Context)",
            description: "React Context with the same memoization techniques and why context can break optimizations strategies in certain scenarios.",
            route: "/memoized-components-context",
            isImplemented: true
        },
        {
            title: "Memoized Components (Redux)",
            description: "How Redux Toolkit with the same memoization techniques and why some are not necessary.",
            route: "/memoized-components-redux",
            isImplemented: true
        },
        {
            title: "Context vs Redux",
            description: "Compare rendering behavior between React Context and Redux when managing shared state across components.",
            route: "/context-vs-redux",
            isImplemented: true
        },
        {
            title: "useEffect vs useMemo",
            description: "Understand the rendering implications of using useEffect for derived state versus useMemo for computed values.",
            route: "/useeffect-vs-usememo",
            isImplemented: true
        },
        {
            title: "Infinite Render Loops",
            description: "Basic example of infinite render loops.",
            route: "/infinite-render-loops",
            isImplemented: true
        },
        {
            title: "Expandable List",
            description: "Demonstrates a simple expandable/collapsible list and the challenges of preventing unnecessary re-renders of list items.",
            route: "/expandable-list",
            isImplemented: true
        },
    {
            title: "Expandable List Redux",
            description: "Demonstrates the same expandable/collapsible list using Redux for state management, showcasing how Redux can help reduce re-renders.",
            route: "/expandable-list-redux",
            isImplemented: true
        }
    ];

    return (
        <Container maxWidth="lg">
            <RenderCount componentName="RenderOptimizationLanding" />
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    React Rendering Examples
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
                    Interactive examples demonstrating different approaches to optimize React rendering performance and how they affect component rendering.
                </Typography>
                <Typography variant="body1" sx={{ mt: 3, mb: 4 }} align="center">
                    Each example includes render counters and configurable delays to help visualize 
                    how different state management and optimization techniques affect component re-rendering behavior.
                </Typography>
            </Box>

            <Grid container spacing={3}>
                {techniques.map((technique, index) => (
                    <Grid item xs={12} md={6} lg={4} key={index}>
                        <TechniqueCard {...technique} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default RenderOptimizationLanding;