
<template>
    <Loader v-if="isLoading"/>
    <div v-else>
        <h1>¿Quién es este pokemon?</h1>
        <PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selectionPokemon="checkAnswer" />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo juego
            </button>
        </template>
    </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    name: 'PokemonPage',
    mounted() {
        this.mixPokemonArr();
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: null,
            isLoading: true
        }
    },
    components: {
        PokemonImage,
        PokemonOptions,
        Loader
    },
    methods: {
        async mixPokemonArr() {
            this.isLoading = true;
            this.pokemonArr = await getPokemonOptions();
            const rndInt = Math.floor(Math.random() * 4);
            this.pokemon = this.pokemonArr[rndInt];
            this.isLoading = false;
        },
        checkAnswer(selectedId) {
            this.showAnswer = true;
            if (this.pokemon.id == selectedId) {
                this.message = `Correcto, ${ this.pokemon.name }`;
                this.showPokemon = true;
            } else {
                this.message = `Oops, era ${ this.pokemon.name }`;
            }
        },
        newGame() {
            this.showPokemon = false;
            this.showAnswer = false;
            this.mixPokemonArr();
        }
    }
}
</script>

<style>

</style>