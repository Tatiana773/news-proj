import React, {useRef, useState} from 'react'
import {Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import themeConfig from '../../config/theme'
import {Outlet} from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "../../store/index";

const AppRoot = () => {
    const appTheme = createTheme(themeConfig)

    return (
        <Provider store = {store}>
            <ThemeProvider theme={appTheme}>
                <CssBaseline />
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
            </ThemeProvider>
        </Provider>
    )
}

export default AppRoot
