import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function PokemonCard(props) {
  const { name, image } = props.item;

  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${name}`);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.item}>
        <View style={styles.spacing}>
          <View style={styles.contentImage}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  contentImage: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },

  info: {
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    fontWeight: "bold",
    color: "#2c3e50",
    fontSize: 15,
  },
});

// PokemonCard.PropTypes = {
//   name: PropTypes.string,
//   image: PropTypes.string,
// };

// PokemonCard.defaultProps = {
//   name: "Name Pokemon",
//   image: "URL Image",
// };
