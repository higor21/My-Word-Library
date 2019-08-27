import React from 'react'
import Divider from '@material-ui/core/Divider';

import SearchBar from './searchBar/searchBar'
import { Paper, Tabs, Tab, TextField, Grid } from '@material-ui/core';

class WordsPanel extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: 0};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        console.log(newValue)
        this.setState({value: newValue});
    }
    
    render(){
        return (
            <React.Fragment>
                <SearchBar title_bar="Search for a specific word &nbsp;">
                    <form noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <TextField
                                    id="word"
                                    label="Word"
                                    value={""}
                                    onChange={() => {}}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="translate"
                                    label="Translate of the word"
                                    placeholder="part of the translate"
                                    value={""}
                                    onChange={() => {}}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    id="meaning"
                                    label="Meaning"
                                    placeholder="write a specific text"
                                    multiline
                                    onChange={() => {}}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="standard-number"
                                    label="Quantity of examples"
                                    value={""}
                                    onChange={() => {}}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </form>
                </SearchBar>
                <br/>
                <Divider/>
            </React.Fragment>
        )
    }
}

export default WordsPanel