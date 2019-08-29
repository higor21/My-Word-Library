import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';

import { styles } from './style'
import { Tooltip, Divider } from '@material-ui/core';

export default function WordCard(props) {
    const classes = styles();
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    function addContent(contentList, pipeExist) {
        var contentList = contentList || []
        return contentList.map((e, index) => (
            <React.Fragment key={index}>
                <Typography display="inline">
                    {e}{(pipeExist && index < contentList.length - 1) ? " | " : <br/>}
                </Typography>
            </React.Fragment>
        ))
    }

    return (
        <Card className={classes.card}>
            <CardHeader
                action={
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                }
                title={props.word}
                subheader={props.translation}
            />

            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Divider />
                <CardContent>
                    <br/>
                    <Typography paragraph ><strong>Translations:</strong></Typography>
                    {addContent(props.translations, true)}
                    { props.meanings &&
                        <React.Fragment>
                            <br/>
                            <Typography paragraph ><strong>Meanings:</strong> </Typography>
                            {addContent(props.meanings, false)}
                        </React.Fragment>
                    }
                    { props.examples && 
                        <React.Fragment>
                            <br/>
                            <Typography paragraph ><strong>Examples:</strong> </Typography>
                            {addContent(props.examples, false)}
                        </React.Fragment>
                    }
                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title="edit" placement="top">
                        <IconButton aria-label="edit">
                            <EditIcon className={classes.editColor}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="remove" placement="top">
                        <IconButton aria-label="delete">
                            <DeleteForeverIcon className={classes.deleteColor}/>
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Collapse>
        </Card>
    );
}
