import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PokemonCard from './PokemonCard';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'coral',
        height: '100vh'
    },
    head: {
        textAlign: 'center',
        backgroundColor: 'green',
    }
});

function AllPokemon() {
    const classes = useStyles();

    return (
        <>
            <Container fixed>
                <Typography className={classes.container} component='div'>
                    <h1 className={classes.head}>Pokemon API</h1>
                    <PokemonCard />
                </Typography>
            </Container>
        </>
    )
}

export default AllPokemon;
