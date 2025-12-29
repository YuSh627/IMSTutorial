import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import RewardsOffer from "../components/HomeScreen/RewardsOffer";
import Header from "../components/HomeScreen/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { productInfo } from "../axios/product.service";
import { ProductInfo } from "../interface/apiTypes";
import Featured from "../components/HomeScreen/Featured";
import OurMenu from "../components/HomeScreen/OurMenu";
import NewlyIn from "../components/HomeScreen/NewlyIn";

export default function HomeScreen() {
  const [product, setProduct] = useState<ProductInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await productInfo("1");
      if (result.status !== "error" && result.result) {
        setProduct(result.result);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primaryColor }}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <RewardsOffer product={product} />
          <Featured products={product} />
          <OurMenu product={product} />
          <NewlyIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 22,
    paddingBottom: 20,
    backgroundColor: "#F5F5F5",
  },
});
