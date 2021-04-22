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
    
    const [pokedex, setPokedex] = useState([]);
    // const [wildPokemon, setWildPokemon] = ({});
    
    useEffect(() => {
        encounterWildPokemon();
    }, []);

    const pokeId = () => {
        const min = Math.ceil(1);
        const max = Math.floor(151);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const encounterWildPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId()).then(res => {
            setPokedex(res.data);
        });
    }

    return (
        <>
            <div>
                  
                <Card className={classes.root}>
                    <CardActionArea>
                        {/* <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + setPokeid.id + ".png'} alt='' /> */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                            {pokedex.map(pokemon => (
                                <div className="pokemon" key={pokemon.id}>
                                    <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} className="sprite"  alt=''/>
                                    <h3 className="pokemon-name">{pokemon.name}</h3>
                                </div>
                            ))}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </>
    )
}

export default PokemonCard;
