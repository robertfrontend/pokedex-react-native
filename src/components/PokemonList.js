import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PokemonCard from "./PokemonCard";
PokemonCard;

export default function PokemonList(props) {
  const { pokemons } = props;
  console.log(pokemons, "pokemonspokemonspokemons");

  return (
    <>
      <FlatList
        data={pokemons}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(pokemon) => String(pokemon.id)}
        renderItem={({ item }) => <PokemonCard item={item} />}
        contentContainerStyle={styles.flatList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
    paddingHorizontal: 5,
    marginTop: 30,
  },
  item: {
    padding: 20,
    width: "50%",
    marginBottom: 10,
  },
});
