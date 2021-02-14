import state from './state';

export default {
    // faz o update da Pokedex o efeito de loading offset
    updateOffset() {
        state.offset += state.limit;
    },
    
    // Adiciona Pokemons para a Pokedex pro infinit Load
    setList(list) {
        state.list.push(...list);
        state.tmpList.push(...list);
    },

    // Informar se Pokedex precisa de mais dados
    setListHasNext(flag) {
        state.listHasNext = flag;
    },

    // Informar se Pokedex terminou a busca de dados
    setListHasCompleted(flag) {
        state.listHasCompleted = flag;
    },

    // Informar erro
    setListHasError(flag) {
        state.listHasError = flag;
    },

    // Resetar Pokedex e colocar o último cache
    resetList() {
        state.list = [...state.tmpList];
        state.isPokemonSearch = false;
        state.listHasError = false;
        state.searchHasError = false;
    },

    // Adicionar a pokedex somente aquele que foi feito a busca
    setPokemonSearched(pokemon) {
        state.list = [pokemon];
    },

    // Informar que o search está acontecendo
    setIsSearching(flag) {
        state.isSearching = flag;
    },

    // Informar que o search foi feito
    setIsPokemonSearch(flag) {
        state.isPokemonSearch = flag;
    },

    // Informar se o search teve erro
    setSearchHasError(flag) {
        state.searchHasError = flag;
    },
};