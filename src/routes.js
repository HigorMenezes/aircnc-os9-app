import { createAppContainer, createSwitchNavigator } from "react-navigation";

import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import BookPage from "./pages/BookPage";

const Routes = createAppContainer(
  createSwitchNavigator({
    LoginPage,
    ListPage,
    BookPage
  })
);

export default Routes;
