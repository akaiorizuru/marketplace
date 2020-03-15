import React from 'react';
import {Grid, TextField, Button} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {withAutorization} from './Autorization';
import {withRouter} from 'react-router-dom';

const useStyles = theme => ({
    formElement: {
        marginTop: '1em'
    }
});

class SignIn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            mail: false,
            password: false,
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <section>
                <form noValidate autoComplete="off">
                    <Grid container direction="column">
                        <TextField className={classes.formElement} id="outlined-basic" label="Email" variant="outlined" onChange={this.handleInput} name="mail"/>
                        <TextField className={classes.formElement} id="outlined-basic" label="Password" variant="outlined" onChange={this.handleInput} name="password"/>
                        <Button onClick={this.handleSignIn} className={classes.formElement} variant="contained" color="primary">Se connecter</Button>
                        <Button onClick={this.handleSignUp} className={classes.formElement} color="primary">S'inscrire</Button>
                    </Grid>
                </form>
            </section>
        );
    }

    handleInput = (event) => {
        console.log(event.target.name, event.target.value);
        this.setState({[event.target.name] : event.target.value});
    }

    handleSignIn = () => {
        this.props.toLogin();
        this.props.history.push('/');
    }

    handleSignUp = () => {
        if(this.state.mail && this.state.password) {
            alert("mail : " + this.state.mail + " / password : " + this.state.password)
            
        } else {
            alert("Tous les champs doivent être remplis !")
        }
    }
}

export default withRouter(withAutorization(withStyles(useStyles)(SignIn)));
