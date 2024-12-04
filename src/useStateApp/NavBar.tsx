import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Container>
                    <Button color="inherit" component={Link} to="/useState">
                        useState App
                    </Button>
                    <Button color="inherit" component={Link} to="/useContext">
                        useContext App
                    </Button>
                    <Button color="inherit" component={Link} to="/reduxToolkit">
                        reduxToolkit App
                    </Button>
                    <Button color="secondary" component={Link} to="/useState/list-page">
                        List Page
                    </Button>
                    <Button color="secondary" component={Link} to="/useState/search-page">
                        Search Page
                    </Button>
                    <Button color="secondary" component={Link} to="/useState/combined-page">
                        Combined Page
                    </Button>
                    <Button color="secondary" component={Link} to="/useState/summary-page">
                        Summary Page
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
