import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextFieldDefault from "../TextField";
import {Typography} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabsAuth = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Почта" {...a11yProps(0)} />
                    <Tab label="Телефон" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TextFieldDefault id="email" placeholder="email" className="mb-1 mt-1"/>
                    <TextFieldDefault id="password" placeholder="password" className="mb-1 mt-1"/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TextFieldDefault id="phone" placeholder="phone" className="mb-1 mt-1"/>
                    <TextFieldDefault id="password" placeholder="password" className="mb-1 mt-1"/>
                </TabPanel>
            </Box>
        </Box>
    );
}

export default TabsAuth;