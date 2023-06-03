import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StatusBar } from "react-native"; // Import StatusBar
import SearchScreen from "./src/screens/SearchScreen";
import ResultScreen from "./src/screens/ResultScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Food Quest",
    },
  }
);
// Set the status bar style to 'dark-content'
StatusBar.setBarStyle("dark-content");

export default createAppContainer(navigator);
