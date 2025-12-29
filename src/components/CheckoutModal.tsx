import React from "react";
import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { useCart } from "../context/CartContext";
import { useNavigation } from "@react-navigation/native";

const CheckoutModal = () => {
  const { isCheckoutOpen, closeCheckout, totalPrice } = useCart();
  const navigation=useNavigation();
  return (
    <Modal visible={isCheckoutOpen} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.sheet}>

          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Checkout</Text>
            <TouchableOpacity onPress={closeCheckout}>
              <Text style={styles.close}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Rows */}
          <Row label="Delivery" value="Select Method" />
          <Row label="Payment" value="Select Method" />
          <Row label="Promo Code" value="Pick discount" />
          <Row label="Total Cost" value={`$${totalPrice.toFixed(2)}`} />

          {/* Button */}
          <Pressable style={styles.button} onPress={()=>navigation.navigate("Place")}>
            <Text style={styles.buttonText}>Place Order</Text>
          </Pressable>

        </View>
      </View>
    </Modal>
  );
};

const Row = ({ label, value }: any) => (
  <View style={styles.row}>
    <Text>{label}</Text>
    <Text>{value} ›</Text>
  </View>
);

export default CheckoutModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "flex-end",
  },
  sheet: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  close: {
    fontSize: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  button: {
    backgroundColor: "#53B175",
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
