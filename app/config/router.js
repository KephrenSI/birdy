import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import Users from '../screens/Users';
import UserDetail from '../screens/UserDetail';
import Profil from '../screens/Profil';
import AddBirds from '../screens/AddBirds';
import AddLocation from '../screens/AddLocation';
import Accueil from '../screens/Accueil';
import Encyclopedie from '../screens/Encyclopedie';
import OiseauDetail from '../screens/OiseauDetail';
import SingleBird from '../screens/SingleBird';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';


// Stack's
export const UsersStack = StackNavigator({
    Feed: {
        screen: Users,
        navigationOptions: {
            title: 'Utilisateurs',
        },
    },
    Details: {
        screen: UserDetail,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
        }),
    },
});

export const EncyclopedieStack = StackNavigator({
    Encyclopedie: {
        screen: Encyclopedie,
        navigationOptions: {
            title: 'Encyclopédie',
        },
    },
    Details: {
        screen: OiseauDetail,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.nom.toUpperCase()}`,
        }),
    },
});

export const AddBirdsStack = StackNavigator({
    AddBirds: {
        screen: AddBirds,
        navigationOptions: {
            title: 'Ajoutez un oiseau',
        },
    },
});

export const AddLocationStack = StackNavigator({
    AddLocation: {
        screen: AddLocation,
        navigationOptions: {
            title: 'Ajoutez un lieu',
        },
    },
});

export const ProfilStack = StackNavigator({
    Profil: {
        screen: Profil,
        navigationOptions: {
            title: 'Profil',
        },
    },
});

export const AccueilStack = StackNavigator({
    Accueil: {
        screen: Accueil,
        navigationOptions: {
            title: 'Derniers ajouts',
        },
    },
    Details: {
        screen: SingleBird,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.bird_name.toUpperCase()}`,
        }),
    },
});



// Tab's
export const Tabs = TabNavigator({
    Accueil: {
        screen: AccueilStack,
        navigationOptions: {
            tabBarLabel: 'Accueil',

        },
    },
    Users: {
        screen: UsersStack,
        navigationOptions: {
            tabBarLabel: 'Users',

        },
    },

    Profil: {
        screen: ProfilStack,
        navigationOptions: {
            tabBarLabel: 'Profil',
        },
    },

    AddLocation: {
        screen: AddLocationStack,
        navigationOptions: {
            tabBarLabel: 'Ajouter',
            title: 'Ajoutez un lieu',
        },
    },

    Encyclopedie: {
        screen: EncyclopedieStack,
        navigationOptions: {
            tabBarLabel: 'Encyclopedie',
        },
    },
});

// button's
export const SignInStack = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: 'Settings',
        },
    },
});

export const SignUpStack = StackNavigator({
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: 'Settings',
        },
    },
});

// Root
export const Root = StackNavigator({
    Tabs: {
        screen: Tabs,
    },
    SignIn: {
        screen: SignInStack,
    },
    SignUp: {
        screen: SignUpStack,
    },
    AddBirds: {
        screen: AddBirdsStack,
    },
}, {
    mode: 'modal',
    headerMode: 'none',
});
