import Factory from './factory';

const coreApiUrl = 'https://pokeapi.com/api/v2';
const commonInstance = Factory(coreApiUrl);

export default commonInstance;