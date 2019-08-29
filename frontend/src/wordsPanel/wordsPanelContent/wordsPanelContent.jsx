import React from 'react'
import { Grid } from '@material-ui/core';

import WordCard from '../wordCard/wordCard'

export default function WordsPanelContent (props) {

    function listCards(){
        const wordsList = props.wordsList || []
        return wordsList.map((w, index) => (
            <Grid key={index} item xl={3} md={4} sm={6} xs={12}>
                <WordCard
                    word={w.word} translation={w.translations[0]}
                    translations={w.translations} meanings={w.meanings}
                />
            </Grid>
        ))
    }

    return (
        <React.Fragment>
            <br/>
            <Grid
                spacing={3}
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                {listCards()}
            </Grid>
        </React.Fragment>
    )
}