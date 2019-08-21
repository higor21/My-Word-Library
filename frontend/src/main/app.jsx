import React from 'react'
import Container from "@material-ui/core/Container"

import Header from './common/template/Header/header'
import Tabs from './common/template/Tabs/Tabs'
import { style } from './style'

export default props => {
    const classes = style()

    return (
        <div>
            <Header />
            <Container maxWidth="md" fixed className={classes.root}>
                <Tabs>

                </Tabs>
            </Container>
        </div>
    )
}