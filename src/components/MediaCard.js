import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withAutorization } from './Autorization';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid, IconButton} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = theme => ({
  root: {
    margin: 10,
    textAlign: "initial"
  },
  media: {
    height: 350,
  },
  icon : {
    marginRight: '.2em'
  },
  grow: {
      flexGrow: 1,
  }
});

class MediaCard extends React.Component {

    renderCardActions(classes) {
        if (this.props.isLogged) {
            return (
                <CardActions>
                    <Button size="small" color="primary">
                        <AddShoppingCartIcon className={classes.icon}/>
                        Ajouter au panier
                    </Button>
                    <div className={classes.grow}></div>
                    <IconButton size="small" color="primary">
                        <InfoOutlinedIcon/>
                    </IconButton>
                </CardActions>
            );
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={this.props.src}
                            title="Affiche"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.content}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {this.renderCardActions(classes)}
                </Card>
            </Grid>
        );
    }
}

export default withAutorization(withStyles(useStyles)(MediaCard));