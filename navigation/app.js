import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcome from "../screens/Welcome"
import VPN from "../screens/VPN"

const Screens = createStackNavigator({
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            title: 'Welcome Screen', // Add the title for the Welcome screen
        },

        
    },
    VPN: {
        screen: VPN,
    },
});

export default createAppContainer(Screens);
