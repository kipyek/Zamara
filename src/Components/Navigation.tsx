import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DrawerNavigationProp } from "@react-navigation/drawer";


export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>,
  route: RouteProp<HomeRoutes, RouteName>;
}


export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
}

export type AuthenticationRoutes = {
  Login: undefined;

};

export type HomeRoutes = {
  Home: undefined;
  Staff: any;
  Continents: any;
  Create: any;
  Update: any
}