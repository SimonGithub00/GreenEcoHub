// @ts-ignore
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route, Navigate} from "react-router-dom";
import { ColorModeContext, useMode } from "../../utils/theme";
import Topbar from "../../components/admin/dashboards/Topbar";
import Sidebar from "../../components/netzbetreiber/dashboard/NetzSidebar";
import FAQ from "../../components/admin/dashboards/FAQs";
import HaushalteSidebar from "../../components/haushalte/dashboard/HaushalteSidebar";
import HaushalteTarifTable from "../../components/haushalte/dashboard/HaushalteTarifTable";
import HaushalteVertragSelect from "../../components/haushalte/dashboard/HaushalteVertragSelect";
import HaushalteVertragCreate from "../../components/haushalte/dashboard/HaushalteVertragCreate";
import HaushalteVertrag from "../../components/haushalte/dashboard/HaushaltVertrag";

const  HaushaltDashboard = () => {
    const [effect, setEffect] = useState("")
    const [theme, colorMode] = useMode();
    const faqItems = [
        {
            title: "What is GreenEcoHub?",
            text: "GreenEcoHub is a platform that allows users to track their carbon footprint and compare it to other users. It also allows users to track their progress in reducing their carbon footprint and provides tips on how to reduce it further.",
        }, {
            title: "How do I use GreenEcoHub?",
            text: "To use GreenEcoHub, you must first create an account. Once you have created an account, you can log in and begin tracking your carbon footprint. You can also view your progress and compare it to other users.",
        }
    ]
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
        <div className="flex h-100" style={{marginTop: "64px"}}>
                <HaushalteSidebar/>
                <div className="flex-1 overflow-y-auto">
                <Topbar fixed={true}/>
                <Routes>
                    <Route path="/tarifTable" element={<HaushalteTarifTable/>}/>
                    <Route path="/vertragSelect" element={<HaushalteVertragSelect/>}/>
                    <Route path="/vertragSelect/:tarifID" element={<HaushalteVertragCreate/>}/>
                    <Route path="/vertragOverview" element={<HaushalteVertrag/>}/>  
                </Routes>
                </div>
                
        </div>
        </ThemeProvider>
        </ColorModeContext.Provider>
    )

}

export default HaushaltDashboard;