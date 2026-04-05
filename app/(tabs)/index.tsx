import {View, Text, TextInput, StyleSheet, Pressable, Image} from "react-native";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Haptics from 'expo-haptics'


type Profile = {

    name: string,
    bio: string


}

export default function HomeScreen() {

    const [value, setValue] = useState("");
    const [profile, setProfile] = useState<Profile>({
        name: "",
        bio: "",
    });


    useEffect(() => {


        const load = async () => {
            const name = await AsyncStorage.getItem('name')
            if (name) {
                setProfile((prev) => ({...prev, name}))
                setValue(name)
            }
        }

        load()

    }, [])


    const handlePress = async () => {

        await AsyncStorage.setItem('name', value)
        setProfile((prev) => ({...prev, name: value}))
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        console.log(value)
    }

    return (
        <View style={styles.container}>
            <Text>My name is APP</Text>
            <Text>{profile.name}</Text>
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 200, height: 200}}
            />
            <TextInput style={styles.input} value={value} onChangeText={(text) => setValue(text)}></TextInput>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text>Click Me</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
