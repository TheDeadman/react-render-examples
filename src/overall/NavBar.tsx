import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

const Navbar: React.FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Container>
                    <Button color="inherit" component={Link} to="/">
                        ← Back to Home
                    </Button>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
