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
            route: "/techniques/memoized-components",
            isImplemented: true
        },
        {
            title: "Memoized Components (Context)",
            description: "React Context affects the same memoization techniques and why context can break React.memo optimizations.",
            route: "/techniques/memoized-components-context",
            isImplemented: true
        },
        {
            title: "Memoized Components (Redux)",
            description: "How Redux Toolkit affects memoization patterns and component rendering behavior compared to props and context.",
            route: "/techniques/memoized-components-redux",
            isImplemented: true
        },
        {
            title: "Context vs Redux",
            description: "Compare rendering behavior between React Context and Redux when managing shared state across components.",
            route: "/techniques/context-vs-redux",
            isImplemented: true
        },
        {
            title: "useEffect vs useMemo",
            description: "Understand the rendering implications of using useEffect for derived state versus useMemo for computed values.",
            route: "/techniques/useeffect-vs-usememo",
            isImplemented: true
        },
        {
            title: "Infinite Render Loops",
            description: "Basic causes of infinite render loops",
            route: "/techniques/infinite-render-loops",
            isImplemented: true
        },
        {
            title: "List Rendering Optimization",
            description: "Techniques for optimized list rendering.",
            route: "/techniques/list-rendering",
            isImplemented: false
        },
        {
            title: "Component Splitting",
            description: "How breaking components into smaller pieces can help isolate re-renders and improve performance.",
            route: "/techniques/component-splitting",
            isImplemented: false
        }
    ];

    return (
        <Container maxWidth="lg">
            <RenderCount componentName="RenderOptimizationLanding" />
            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    React Rendering Optimization Techniques
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
                    Interactive examples demonstrating different approaches to optimize React rendering performance
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

            <Box sx={{ mt: 6, p: 3, backgroundColor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="h6" gutterBottom>
                    How to Use These Examples
                </Typography>
                <Typography variant="body2" paragraph>
                    • Each technique includes interactive components with render counters
                </Typography>
                <Typography variant="body2" paragraph>
                    • Use the delay controls to simulate slow rendering and observe the effects
                </Typography>
                <Typography variant="body2" paragraph>
                    • Toggle between different implementations to compare rendering behavior
                </Typography>
                <Typography variant="body2">
                    • Check your browser's React DevTools for additional insights
                </Typography>
            </Box>
        </Container>
    );
};

export default RenderOptimizationLanding;