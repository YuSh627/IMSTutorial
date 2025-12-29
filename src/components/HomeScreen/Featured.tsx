import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import { ProductInfo } from "@/src/interface/apiTypes";
import { colors } from "@/src/constants/colors";

interface FeaturedProps {
  products: ProductInfo[];
}

export default function Featured({ products }: FeaturedProps) {
  const product3 = products.slice(4, 7);

  return (
    <View style={styles.container}>
      <Text variant="titleMedium">Featured</Text>
      <View style={{ gap: 26 }}>
        {product3.map((items) => (
          <Card
            mode="contained"
            key={items.MCODE}
            style={{
              backgroundColor: "white",
              borderRadius: 4,
            }}
          >
            <Card.Cover
              style={{ marginBottom: 15, height: 196, borderRadius: 4 }}
              source={require("../../../assets/images/sweetBreakfast.png")}
            />
            <Card.Content style={{ marginBottom: 8 }}>
              <Text
                variant="titleSmall"
                style={{ color: colors.textColor.primary }}
              >
                Recent Deals
              </Text>
            </Card.Content>
            <Card.Content style={{ gap: 4 }}>
              <Text variant="titleMedium">{items.DESCA}</Text>
              <Text
                variant="bodyMedium"
                style={{ color: colors.textColor.primary }}
              >
                Black coffee , Strawberry, Grapes, and cheese cake with blue
                berry
              </Text>
            </Card.Content>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 13,
  },
});
