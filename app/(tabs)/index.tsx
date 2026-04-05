import {View, Text, TextInput,StyleSheet} from "react-native";
import {useState} from "react";






export default function HomeScreen() {

const [value, setValue] = useState("");

  return (
<View style={styles.container}>
    <Text>Home</Text>
    <TextInput style={styles.input} value={value} onChangeText={(text)=> setValue(text)}></TextInput>
</View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 12,
        marginTop: 12,
        borderRadius: 8,
    },
})