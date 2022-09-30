import React from 'react'
import { Box, AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar'
import Logo from '../assets/images/Logo.png'

const Navigation = () => {
    return (
        <AppBar position="fixed" color='secondary'>
            <Toolbar sx={{ justifyContent: "start" }}>
                <Link to="/">
                    <Box
                        component="img"
                        sx={{
                            maxHeight: { xl: 160, lg: 160, md: 128, sm: 128, xs: 100 },
                            maxWidth: { xl: 120, lg: 120, md: 96, sm: 96, xs: 75 },
                            color: "transparent",
                            marginRight: 15
                        }}
                        alt="Logo"
                        src={Logo}
                    />
                </Link>
                <Box sx={{ width: '40%' }}>
                    <SearchBar />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation