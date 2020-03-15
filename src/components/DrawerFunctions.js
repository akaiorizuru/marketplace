import React from 'react';
import { IconButton, Typography, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withAutorization } from './Autorization';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = ({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    titleDiv: {
        padding: 16
    }
});

class LeftDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.toggleDrawer = (side, open) => event => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
        
            this.setState({ ...this.state, [side]: open });
        };
        this.state = {
            top: false,
            left: false,
            bottom: false,
            right: false,
        };
        this.sideList = (side, classes) => (
            <div
                className={classes.list}
                role="presentation"
                onClick={this.toggleDrawer(side, false)}
                onKeyDown={this.toggleDrawer(side, false)}
            >
                <div className={classes.titleDiv}>
                    <Typography variant="h6">
                        Marketplace
                    </Typography>
                </div>
                <Divider />
                <List>
                    <ListItem button key="Accueil">
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Accueil" />
                    </ListItem>
                    <ListItem button key="Panier">
                        <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
                        <ListItemText primary="Panier" />
                    </ListItem>
                    {this.renderListItem(classes)}
                </List>
                <Divider />
                <List>
                    <ListItem button key="Paramètres">
                        <ListItemIcon><SettingsIcon /></ListItemIcon>
                        <ListItemText primary="Paramètres" />
                    </ListItem>
                </List>
            </div>
        );
    }

    renderListItem(classes) {
        if (this.props.isLogged) {
            return(
            <ListItem button key="Déconnexion">
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Déconnexion" />
            </ListItem>
            );
        } else {
            return(
            <ListItem button key="Connexion">
                <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                <ListItemText primary="Connexion" />
            </ListItem>
            );
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.toggleDrawer('left', true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    {this.sideList('left', classes)}
                </Drawer>
            </div>
        );
    }

}

export default withAutorization(withStyles(useStyles)(LeftDrawer));