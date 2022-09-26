import React from 'react';
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabsNav = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    allowScrollButtonsMobile
                    aria-label="scrollable force tabs example"
                >
                    <Tab label="Все"/>
                    <Tab label="Навынос"/>
                    <Tab label="Суши"/>
                    <Tab label="Бургеры"/>
                    <Tab label="Пицца"/>
                    <Tab label="Десерты"/>
                    <Tab label="Грузия"/>
                </Tabs>
            </Box>
        </>
    );
}


export default TabsNav;