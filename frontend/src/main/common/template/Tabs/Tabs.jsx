import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar';
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { style } from './style'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
}
  

export default props => {
    const classes = style()

    const [value, setValue] = React.useState(2);

    function handleChange(event, newValue) {
      setValue(newValue);
    }

    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                <Tabs       
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    variant="fullWidth"
                >
                    <Tab value="one" wrapped icon={<LocalLibraryRoundedIcon />} aria-label="Your Library" />
                    <Tab value="two" icon={<PlaylistAddRoundedIcon />} aria-label="Add a Word" />
                    <Tab value="three" icon={<PlayArrowRoundedIcon />} aria-label="Memory Game" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index="one">
                Item One
            </TabPanel>
            <TabPanel value={value} index="two">
                Item Two
            </TabPanel>
            <TabPanel value={value} index="three">
                Item Three
            </TabPanel>
        </React.Fragment>
    )
}