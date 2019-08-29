import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function TabPanel(props) {
    const { children, value, index, classes, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={(value || 0) !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        <Box bgcolor="white" p={3} className={classes.content_height}>{children}</Box>
      </Typography>
    );
}