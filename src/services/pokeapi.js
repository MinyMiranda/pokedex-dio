import axios from '@/axios';

const getPokemons = ({ limit = 25, offset = 0 }) => axios.get(`/pokemon?limit=${limit}&offset=0`);

const getPokemonByName = name => axios.get(`/pokemon/${name}`);

export default {
    getPokemons,
    getPokemonByName
}