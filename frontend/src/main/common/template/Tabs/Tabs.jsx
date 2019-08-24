import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab'

import { style } from './style'
import TabPanel from './TabPanel'
import { Tooltip } from '@material-ui/core';

export default function Tabs_(props) {
    const classes = style()

    const [value, setValue] = React.useState(0);
    
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function addTabs(){
        const contentList = props.contentList
        let i = 0;
        return contentList.map((c, index) => (
            <Tooltip title={c.ariaLabel} placement="top">
                <Tab  key={index} value={i++} icon={c.icon} aria-label={c.ariaLabel} />
            </Tooltip>
        ))
    }

    function addContentTabs(){
        const contentList = props.contentList
        let i = 0;
        return contentList.map((c, index) => (
            <TabPanel key={index} value={value} index={i++} classes={classes}>
                {c.content}
            </TabPanel>
        ))
    }


    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                <Tabs       
                    value={value || 0}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    variant="fullWidth"
                >
                    {addTabs()}
                </Tabs>
            </AppBar>
            {addContentTabs()}
        </React.Fragment>
    )
}

