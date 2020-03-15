import React from 'react';
import MediaCard from "./MediaCard"
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withSearching } from './Searching';
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = theme => ({
    root: {
        margin: "10px 0",
    },
    empty: {
        color: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        flexDirection: "column",
        fontSize: "2em",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0"
    },
    illustration: {
        width: "30vmin",
        height: "30vmin"
    },
    pagesWrapper: {
        margin: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    pages: {
        margin: "auto"
    }
});

class Articles extends React.Component {

    render() {
        const { classes } = this.props;
        var mediacards = <div className={classes.empty}><SearchIcon className={classes.illustration}/>Faites une recherche</div>;
        var pages = "";
        if(this.props.results.hasOwnProperty('Search')) {
            mediacards = this.props.results.Search.map((info, key) => {
                return <MediaCard key={key} title={info.Title} content={info.Year} src={info.Poster === "N/A" ? "NoPictureAvailable.jpg" : info.Poster} />
            })
            pages = <Pagination count={(this.props.results.totalResults%10)} page={this.props.page} onChange={this.props.pageChange} className={classes.pages}/>;
        }
        return (
            <section className={classes.root}>
                <Grid container>
                { mediacards }
                </Grid>
                <div className={classes.pagesWrapper}>
                    { pages }
                </div>
            </section>
        );
    }
}

export default withSearching(withStyles(useStyles)(Articles));