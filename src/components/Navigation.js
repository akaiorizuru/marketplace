import React from 'react';
import { AppBar, Toolbar, Typography, Tooltip, IconButton, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { withAutorization } from './Autorization';
import Searchbar from './Searchbar';
import LeftDrawer from './DrawerFunctions';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        textAlign: 'initial',
    },
    link: {
		color: 'white',
		textDecoration: 'none',
		outline: 'none'
    }, 
    icon : {
        marginRight: '.2em'
	},
	grow: {
		flexGrow: 1,
	},
});

class Navigation extends React.Component {
	
	handleLogout = () => {
        alert(this.props.isLogged)
	}

    renderButton(classes) {
        if (this.props.isLogged) {
            return(
                <Box>
					<Link to="/panier">
						<Tooltip title="Panier">
							<IconButton className={classes.link}><ShoppingCartIcon/></IconButton>
						</Tooltip>
					</Link>
					<Tooltip title="Déconnexion">
                    	<IconButton className={classes.link} onClick={this.handleLogout}><AccountCircleIcon/></IconButton>
					</Tooltip>
                </Box>
            );
        } else {
            return(
				<Link to="/signin">
					<Tooltip title="Connexion">
						<IconButton className={classes.link}><ExitToAppIcon/></IconButton>
					</Tooltip>
				</Link>
            );
        }
	}

    render() {
        const { classes } = this.props;
        return(
            <header className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
						<LeftDrawer/>
						<Typography variant="h6" className={classes.title}>
							<Tooltip title="Accueil">
								<Link to="/" className={classes.link}>
									Marketplace
								</Link>
							</Tooltip>
						</Typography>
						<Searchbar />
						<div className={classes.grow} />
                        {this.renderButton(classes)}
                    </Toolbar>
                </AppBar>
            </header>
        );
    }
}

export default withAutorization(withStyles(useStyles)(Navigation));
