import React from 'react'
import Container from "@material-ui/core/Container"
import LocalLibraryRoundedIcon from '@material-ui/icons/LocalLibraryRounded';
import PlaylistAddRoundedIcon from '@material-ui/icons/PlaylistAddRounded';
import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

import Header from './common/template/Header/header'
import Tabs from './common/template/Tabs/Tabs'
import { style } from './style'

export default props => {
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
                            content: "Item One"
                        },
                        {
                            icon: <PlaylistAddRoundedIcon />,
                            ariaLabel: "Add a Word",
                            content: "Item Two"
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