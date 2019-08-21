import React from 'react'
import Container from "@material-ui/core/Container"

import Header from './common/template/Header/header'
import Tabs from './common/template/Tabs/Tabs'

export default props => (
    <div>
        <Header />
        <Container maxWidth="md" fixed>
            <Tabs />
        </Container>
    </div>
)