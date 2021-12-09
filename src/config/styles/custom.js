import { Dimensions, StyleSheet } from "react-native";
import * as fontSize from '../../config/styles/font';

export default StyleSheet.create({
    statusBar: {
        backgroundColor: '#fba352'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        // height: Dimensions.get('screen').height,
    },
    titleHeader: {
        textAlign: "center",
        fontSize: fontSize.FONT_SIZE_SMALL,
        fontWeight: 'bold',
        width: 200,
        marginTop: 30,
        marginBottom: 50
    },
    inputContainer: {
        width: 300,
    },
    input: {
        borderStyle: "solid",
        borderRadius: 15
    },
    button: {
        width: 200,
        marginTop: 10
    }
});