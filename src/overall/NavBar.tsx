import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const getRoutes = (path: string) => {
    console.log("path: ", path)
    let splitPath = path.split('/')
    let endPath = ""
    if (splitPath.length === 3) {
        endPath = splitPath[2];
    }

    return {
        rootPath: '/',
        statePath: `/useState/${endPath}`,
        contextPath: `/useContext/${endPath}`,
        contextTwo: `/useContextTwo/${endPath}`,
        reduxPath: `/reduxToolkit/${endPath}`,
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
                    <Button color="inherit" component={Link} to={routes.statePath}>
                        useState App
                    </Button>
                    <Button color="inherit" component={Link} to={routes.contextPath}>
                        useContext App
                    </Button>
                    <Button color="inherit" component={Link} to={routes.contextTwo}>
                        useContext App Two
                    </Button>
                    <Button color="inherit" component={Link} to={routes.reduxPath}>
                        reduxToolkit App
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
