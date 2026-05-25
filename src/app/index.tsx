import React from "react";
import { View, Text, FlatList, Image } from "react-native";

const DATA = [
  {
    id: 1,
    title: "iPhone 14",
    price: 1200,
    thumbnail: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Samsung S23",
    price: 1000,
    thumbnail: "https://via.placeholder.com/150",
  },
];

export default function Index() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        return (
          <View style={{ padding: 10 }}>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 100, height: 100 }}
            />

            <Text>{item.title}</Text>
            <Text>{item.price} $</Text>
          </View>
        );
      }}
    />
  );
}