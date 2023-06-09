

import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { Navbar, Sidebar } from "../components";

const drawerWidth = 340;

export const JournalLayout = ( { children } ) => {

    return (

        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

            <Navbar drawerWidth={drawerWidth} />
            {/* <NavBarTwo /> */}

            <Sidebar drawerWidth={drawerWidth} />

            <Box
                component='main'
                sx={{ flexGrow: 1, p: 2 }}
            >

                <Toolbar />

                {children}

            </Box>

        </Box>
    )
};
