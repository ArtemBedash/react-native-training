import {FlatList, Text} from "react-native";
import {ITEMS} from "@/data/items";


export default function HomeScreen() {


    return (
        <FlatList
            data={ITEMS}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Text>{item.title}</Text>}
        >


        </FlatList>


    )
}


const styles = StyleSheet.create({
    // StyleSheet.create — не CSS, нет каскадности, Flexbox по умолчанию column
    container: {
        flex: 1,                  // занимает всё доступное пространство
        justifyContent: 'center', // центрирование по вертикали (главная ось — column)
        padding: 20,
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 12,
        marginTop: 12,
        borderRadius: 8,
    },
    button: {
        borderWidth: 1,
        width: 100,
        height: 50,
        justifyContent: 'center'
    }
})
