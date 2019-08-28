import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    deleteColor: {
      color: "#ff4d4d",
    },
    editColor: {
      color: "#ff9e07",
    }
}));