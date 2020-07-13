import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import { Ionicons } from "@expo/vector-icons";
import UserProductScreen from "../screens/user/UserProductScreen";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: "white",
};

const ProductNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name={"md-cart"} size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrderNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name={"md-list"} size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);
const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons name={"md-create"} size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductNavigator,
    Orders: OrderNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
