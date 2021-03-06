import React from 'react'
import Container from "@material-ui/core/Container"
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

import Header from '../common/template/Header/header'
import Tabs from '../common/template/Tabs/Tabs'
import { style } from './style'
import WordsPanel from '../wordsPanel/wordsPanel'
import AddPanel from '../addPanel/addPanel'

export default function App(props) {
    const classes = style()

    return (
        <div>
            <Header />
            <Container maxWidth="md" fixed className={classes.root}>
                <Tabs
                    contentList={[
                        {
                            icon: <LocalLibraryRoundedIcon />,
                            ariaLabel: "Your Library",
                            content: <WordsPanel />
                        },
                        {
                            icon: <PlaylistAddRoundedIcon />,
                            ariaLabel: "Add a Word",
                            content: <AddPanel/>
                        },
                        {
                            icon: <PlayArrowRoundedIcon />,
                            ariaLabel: "Memory Game",
                            content: "Item Three"
                        }
                    ]}
                />
            </Container>
        </div>
    )
}