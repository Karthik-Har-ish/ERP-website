import React, { StrictMode } from 'react'
import App from "./App"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
        <App></App>
        </BrowserRouter>
    </StrictMode>
)


