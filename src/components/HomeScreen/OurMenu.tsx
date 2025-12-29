import { StyleSheet, View } from "react-native";
import React from "react";
import { ProductInfo } from "@/src/interface/apiTypes";

import { colors } from "@/src/constants/colors";
import { Avatar, Text } from "react-native-paper";

interface OurMenuProps {
  product: ProductInfo[];
}

export default function OurMenu({ product }: OurMenuProps) {
  const product3 = product.slice(7, 11);
  return (
    <View style={styles.container}>
      <View style={styles.cardTitle}>
        <Text variant="titleMedium">Our Menu</Text>
        <Text
          style={{
            fontWeight: "400",
            color: colors.textColor.primary,
          }}
        >
          See all
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        {product3.map((item) => (
          <View style={styles.cards} key={item.MCODE}>
            <Avatar.Image
              size={100}
              source={require("../../../assets/images/coldDrinks.png")}
            />
            <View style={styles.textContainer}>
              <Text
                numberOfLines={4}
                ellipsizeMode="tail"
                style={{
                  fontWeight: "400",
                  color: colors.textColor.primary,
                  textAlign: "center",
                }}
              >
                {item.DESCA}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, gap: 16 },
  cardTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardsContainer: {
    flexDirection: "row",
    gap: 3,
    justifyContent: "space-between",
  },
  cards: {
    alignItems: "center",
    gap: 11,
  },
  textContainer: {
    gap: 2,
    maxWidth: 100,
    alignItems: "center",
  },
});
