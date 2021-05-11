import { StyleSheet, StatusBar, Platform } from 'react-native';

const spreadOperScreenStyles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(311, 33%, 88%)',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'hsl(280, 53%, 75%)',
        marginHorizontal: 30,
        marginVertical: 20,
        borderRadius: 10

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textContainer:{
        flex: 6,
        backgroundColor: 'hsl(290, 91%, 87%)',
        margin: 15,
        padding: 15,
        borderRadius: 30
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
})

const restParamsScreenStyles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'hsl(149, 44%, 80%)',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'hsl(106, 100%, 85%)',
        marginHorizontal: '10%',
        marginVertical: '10%'
        
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Hoefler Text',
        textAlign: 'center',
    },
    textContainer:{
        flex: 4,
        justifyContent: 'center',
        backgroundColor: 'hsl(84, 84%, 80%)',
        margin: 40,
        padding: 20
    },
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'monospace' : 'Hoefler Text',
        textAlign: 'center',
    },
})

const reactHooksScreenStyles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        flexDirection: 'column',
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
        backgroundColor: 'hsl(200, 34%, 42%)'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'android' ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
        color: 'white',
        textAlign: 'center',
    },
    textContainer:{
        flex: 6,
        backgroundColor: 'hsl(202, 38%, 48%)',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    text: {
        fontSize: 20,
        fontFamily: Platform.OS === 'android' ? 'sans-serif-thin' : 'AppleSDGothicNeo-Thin',
        color: 'white',
        textAlign: 'center',
    },
})

export { spreadOperScreenStyles, restParamsScreenStyles, reactHooksScreenStyles }