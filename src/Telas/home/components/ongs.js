import React, {useState, useEffect} from "react";
import { FlatList, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
//import Ong from "./ong";
import api from "../../../services/apiOngs";

export default function Ongs({ Topo, ImageHome }) {
    const [ongs, setOngs] = useState([]);

    const TopoLista = () => {
      return (
        <>
          <Topo />
          <ImageHome />
          <Text style={estilos.TopoLista}>ONGS</Text>
        </>
      );
    };
  
    /*async function buscarOng(){
      try {
        const response = await api.get('/ongs');
        const data = await response.json();
        console.log(data)
        setData(data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      }
    };*/

    useEffect(() => {
      const fetchOngs = async () => {
        try {
          const response = await api.get('/ongs');
          const data = await response.json();
          setOngs(data); // Armazena os dados das ONGs no estado
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchOngs();
    }, []);
  
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
      <TouchableOpacity style={estilos.card} onPress={navigation.navigate('DetalhesOng')}>
        <Image source={item.imagem} style={estilos.imagemCard} />
        <View style={estilos.informacoes}>
          <Text style={estilos.nomeCard}>{item.nome}</Text>
          <Text style={estilos.categoriaCard}>{item.categoria}</Text>
        </View>
      </TouchableOpacity>
    );
    
    return (
      <FlatList
        data={ongs}
        renderItem={ renderItem}
        ListHeaderComponent={TopoLista}
        keyExtractor={({ id }) => id}
      />
    );
}
  


const estilos = StyleSheet.create({
    TopoLista: {
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 8,
        fontWeight: 'bold',
        color: "#000"
    },
    card: {
      backgroundColor: "#f6f6f6",
      flexDirection: "row",
      marginHorizontal: 16,
      marginVertical: 8,
      borderRadius: 10,
  
      //Android: sombra
      elevation: 4,
  
      //IOS: sombra
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
    },
    imagemCard: {
      width: 60,
      height: 60,
      marginVertical: 12,
      marginHorizontal: 12,
    },
    nomeCard: {
      fontSize: 16,
      color: "#000",
      fontWeight: "bold",
    },
    categoriaCard: {
      fontWeight: "bold",
      color: "gray",
    },
    informacoes: {
      justifyContent: "center",
    },
})