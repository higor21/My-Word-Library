import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import Tooltip from '@material-ui/core/Tooltip';
import Divider from '@material-ui/core/Divider';

export default function SearchBar (props) {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1c-content"
            >
                <Typography color="primary">{props.title_bar}</Typography>
                <SearchIcon color="primary"/>
            </ExpansionPanelSummary>
            <Divider/>
            <ExpansionPanelDetails>
                {props.children}
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
                <Tooltip title="Clear" placement="top">
                    <Button size="small" color="secondary">
                        <ClearAllIcon/>
                    </Button>
                </Tooltip>
                <Tooltip title="Search" placement="top">
                    <Button size="small" color="primary">
                        <SearchIcon/>
                    </Button>
                </Tooltip>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}