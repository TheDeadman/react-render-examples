import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const getRoutes = (path: string) => {
    console.log("path: ", path)
    
    return {
        rootPath: '/',
        memoizedComponents: '/techniques/memoized-components',
        contextVsRedux: '/techniques/context-vs-redux',
        effectVsMemo: '/techniques/useeffect-vs-usememo',
    }
}

const Navbar: React.FC = () => {
    const location = useLocation();
    const routes = getRoutes(location.pathname);
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Container>
                    <Button color="inherit" component={Link} to={routes.rootPath}>
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to={routes.memoizedComponents}>
                        Memoized Components
                    </Button>
                    <Button color="inherit" component={Link} to={routes.contextVsRedux}>
                        Context Vs Redux
                    </Button>
                    <Button color="inherit" component={Link} to={routes.effectVsMemo}>
                        useEffect Vs useMemo
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
