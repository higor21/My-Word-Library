import React from 'react'
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';

import SearchBar from './searchBar/searchBar'
import { TextField, Grid } from '@material-ui/core';
import { style } from "./style"
import WordsPanelContent from './wordsPanelContent/wordsPanelContent';



class WordsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }

    render() {
        return (
            <React.Fragment>
                <SearchBar title_bar="Search for a specific word &nbsp;">
                    <form noValidate autoComplete="off" className={this.props.classes.alignItensCenter}>
                        <Grid
                            spacing={3}
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={6}>
                                <TextField
                                    id="word"
                                    label="Word"
                                    value={""}
                                    onChange={() => { }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="translate"
                                    label="Translate of the word"
                                    placeholder="part of the translate"
                                    value={""}
                                    onChange={() => { }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    id="meaning"
                                    label="Meaning"
                                    placeholder="write a specific text"
                                    multiline
                                    onChange={() => { }}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="standard-number"
                                    label="Quantity of examples"
                                    value={""}
                                    onChange={() => { }}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </form>
                </SearchBar>
                <br />
                <Divider />
                <WordsPanelContent wordsList={[
                    {word: "listen", translations: ["escutar"], meanings: ["meanging1","meaning2"], examples: ["translation1","translation2"]},
                    {word: "hard", translations: ["difícil"], meanings: ["meanging1","meaning2"], examples: ["translation1","translation2"]},
                    {word: "gap", translations: ["lacuna","buraco"]/* , meanings: ["meanging1","meaning2"] */, examples: ["translation1","translation2"]},
                    {word: "title", translations: ["título"], meanings: ["meanging1","meaning2"], examples: ["translation1","translation2"]}
                ]}>
                    
                </WordsPanelContent>
            </React.Fragment>
        )
    }
}

export default withStyles(style)(WordsPanel)