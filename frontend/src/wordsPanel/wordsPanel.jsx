import React from 'react'
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/styles';
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import { bindActionCreators } from 'redux'

import { getWords } from './wordsPanelActions'
import SearchBar from './searchBar/searchBar'
import WordsPanelContent from './wordsPanelContent/wordsPanelContent';
import If from '../common/operator/If'

import { TextField, Grid, Typography } from '@material-ui/core';

import { style } from "./style"

class WordsPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            value: 0,
            search: {
                word: "",
                translate: "",
                meaning: "",
                qty_examples: ""
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAttribute = this.handleChangeAttribute.bind(this);
        this.searchWord = this.searchWord.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillMount(){
        this.props.getWords("5da51e394326e133fb50ab83")
    }

    handleChange(event, newValue) {
        this.setState({ value: newValue });
    }

    handleChangeAttribute(event){
        var new_search = this.state.search
        new_search[event.target.id] = event.target.value
        this.setState({search: new_search})
    }

    searchWord(){
        const { word, translate, meaning, qty_examples } = this.state.search
        this.props.getWords(
            "5da51e394326e133fb50ab83",
            word,
            translate, 
            meaning,
            qty_examples
        )
    }

    handleKeyPress(event){
        if (event.key === 'Enter') {
            setTimeout(() => {
                this.searchWord()
            }, 350)
        }
    }

    clearSearch(){
        this.setState({
            search: {
                word: "",
                translate: "",
                meaning: "",
                qty_examples: ""
            }
        })
    }

    render() {
        const { word, translate, qty_examples, meaning } = this.state.search
        return (
            <React.Fragment>
                <SearchBar 
                    title_bar="Search for a specific word &nbsp;"
                    search={this.searchWord}
                    clear={this.clearSearch}
                >
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
                                    value={word}
                                    onChange={this.handleChangeAttribute}
                                    onKeyPress={this.handleKeyPress}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    id="translate"
                                    label="Translate of the word"
                                    value={translate}
                                    placeholder="part of the translate"
                                    onChange={this.handleChangeAttribute}
                                    onKeyPress={this.handleKeyPress}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={9}>
                                <TextField
                                    id="meaning"
                                    label="Meaning"
                                    value={meaning}
                                    placeholder="write a specific text"
                                    multiline
                                    onKeyPress={this.handleKeyPress}
                                    onChange={this.handleChangeAttribute}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField
                                    id="qty_examples"
                                    value={qty_examples}
                                    label="Quantity of examples"
                                    onChange={this.handleChangeAttribute}
                                    onKeyPress={this.handleKeyPress}
                                    type="number"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </form>
                </SearchBar>
                <br />
                <Divider />
                <If test={this.props.wordsList && this.props.wordsList.length > 0} 
                    optionIfTrue = {
                        <WordsPanelContent wordsList={this.props.wordsList}/>
                    }
                    optionIfFalse = {
                        <Typography
                            align='center'
                            variant='h6'
                        >
                            <img 
                                src="../images/not_found.png" 
                                alt="You don't have any words yet!"
                            />
                        </Typography>
                    }
                />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({wordsList: state.wordsPanel.contentList})
const mapDispatchToProps = dispatch => bindActionCreators({getWords}, dispatch)

export default compose(
    withStyles(style, { name: 'WordsPanel' }),
    connect(mapStateToProps, mapDispatchToProps)
)(WordsPanel);
