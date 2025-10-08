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
        examples: '/examples/contextVsRedux',
        effectVsMemo: '/examples/effectVsMemo',
        listRenderingPath: `/examples/listRendering`,
        // contextPath: `/useContext/${endPath}`,
        contextTwo: `/useContextTwo/combined-page`,
        reduxPath: `/reduxToolkit/combined-page`,
        //         contextTwo: `/useContextTwo/${endPath}`,
        // reduxPath: `/reduxToolkit/${endPath}`,
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
                    <Button color="inherit" component={Link} to={routes.effectVsMemo}>
                        useEffect Vs useMemo
                    </Button>
                    <Button color="inherit" component={Link} to={routes.examples}>
                        Context Vs Redux
                    </Button>
                    <Button color="inherit" component={Link} to={routes.listRenderingPath}>
                        List Rendering
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
