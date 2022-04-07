import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import Main from "./RoofCalc/components/Main";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Main />
    </StrictMode>
);