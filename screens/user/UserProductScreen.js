import React from "react";
import { FlatList, Button, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import ProductItem from "../../components/shop/ProductItem";
import Colors from "../../constants/Colors";
import * as productsActions from "../../store/actions/products";

const UserProductScreen = (props) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    props.navigation.navigate("EditProduct", { productId: id });
  };
  const deleteHandler = (id) => {
    Alert.alert("Are you sure?", "Do you really want to delete this item?", [
      { text: "No", styles: "default" },
      {
        text: "Yes",
        styl: "destructive",
        onPress: () => {
          dispatch(productsActions.deleteProduct(id));
        },
      },
    ]);
  };

  return (
    <FlatList
      data={userProducts}
      renderItem={(itemData) => (
        <ProductItem
          title={itemData.item.title}
          price={itemData.item.price}
          image={itemData.item.imageUrl}
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
        >
          <Button
            color={Colors.primary}
            title="Edit Details"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            color={Colors.primary}
            title="Delete"
            onPress={deleteHandler.bind(this, itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};
UserProductScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Products",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={"md-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add"
          iconName={"md-create"}
          onPress={() => {
            navData.navigation.navigate("EditProduct");
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default UserProductScreen;
