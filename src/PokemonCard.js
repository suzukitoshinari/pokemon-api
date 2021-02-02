import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// import PokemonList from '../src/PokemonList';

const useStyles = makeStyles({
    root: {
        maxWidth: 240,
    },
    form: {
        textAlign: 'center',
        backgroundColor: '#eee'
    },
    btn: {
        marginTop: 15,
        backgroundColor: 'transparent',
        borderRadius: 5,
        outline: 'none'
    },
});

function PokemonCard() {
    const classes = useStyles();
    
    const [pokemon, setPokemon] = useState([]);
    // const [pokeid, setPokeid] = useState({});
    
    useEffect(() => {
        axios('https://pokeapi.co/api/v2/pokemon/pikachu').then(res => {
            setPokemon(res.data.abilities[0].name)
        });
    }, []);

    return (
        <>
            <div>
                  
                <Card className={classes.root}>
                    <CardActionArea>
                        {/* <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + setPokeid.id + ".png'} alt='' /> */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {pokemon}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

export default PokemonCard;
