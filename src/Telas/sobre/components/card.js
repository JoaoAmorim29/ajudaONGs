import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default function Card(){
    return (<View style={estilos.card}>
        <Text style={estilos.title}>SOBRE</Text>
        <Text style={estilos.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elementum quam
            . Mauris sapien mauris, porttitor quis ante quis, sagittis elementum mi. 
            Aliquam quis quam erat. In lacus orci, feugiat ac commodo eget, volutpat ac magna. 
            Fusce quis congue est. Integer aliquet justo nunc, id lacinia risus consequat et. 
            Vestibulum et eros ac leo tristique convallis. Sed scelerisque sollicitudin pretium.

            Ut et orci elit. Duis justo quam, gravida id ultrices id, tincidunt dictum tortor. 
            Maecenas sit amet molestie odio, sed pulvinar turpis. Etiam congue condimentum viverra.
            Integer sagittis elementum varius. Maecenas pellentesque lorem nibh, 
            at egestas erat semper in. Suspendisse vestibulum non eros nec varius.
            Maecenas mattis odio at viverra tempor.

            Quisque pulvinar tincidunt pulvinar. Vivamus et diam a sem viverra malesuada. 
            Vivamus vestibulum, turpis quis blandit mollis, odio nisi commodo urna, 
            in condimentum risus leo in ligula. Sed in faucibus tellus, ac molestie lacus. 
            Duis venenatis maximus accumsan. Pellentesque fringilla arcu lobortis, maximus
            nulla non, pellentesque elit. Praesent rutrum dolor cursus, lacinia justo quis, 
            rhoncus nunc. Praesent eget viverra sapien. </Text>

    </View>)
}

const estilos = StyleSheet.create({
    card:{
        backgroundColor: "#FFF",
        minHeight: 200,
        width: "90%",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginTop: 40,

        //Android: sombra
        elevation: 4,

        //IOS: sombra
        shadowColor: "#000",
        shadowOffSet: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    title:{
        color: "#0000ff",
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center",
        marginBottom: 5,
    },
    Text:{
        fontWeight: 'bold',
        color: "gray"
    }
})