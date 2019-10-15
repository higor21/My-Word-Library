import React from 'react'

import { TextField, Grid } from '@material-ui/core';

class AddPanel extends React.Component {
    render() {
        return <React.Fragment>
            <form noValidate autoComplete="off">
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
                            onChange={() => ({})}
                            onKeyPress={() => ({})}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            id="translate"
                            label="Translate of the word"
                            value={""}
                            placeholder="part of the translate"
                            onChange={() => ({})}
                            onKeyPress={() => ({})}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            id="meaning"
                            label="Meaning"
                            value={""}
                            placeholder="write a specific text"
                            multiline
                            onKeyPress={() => ({})}
                            onChange={() => ({})}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="qty_examples"
                            value={""}
                            label="Quantity of examples"
                            onChange={() => ({})}
                            onKeyPress={() => ({})}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    }
}

export default AddPanel