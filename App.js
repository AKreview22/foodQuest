import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from "react-native"; // Import StatusBar
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {},
  }
);
// Set the status bar style to 'dark-content'
StatusBar.setBarStyle("dark-content");

export default createAppContainer(navigator);
