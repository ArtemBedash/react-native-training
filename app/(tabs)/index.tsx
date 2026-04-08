// Базовые компоненты React Native для вёрстки и взаимодействия
import {View, Text, TextInput, StyleSheet, Pressable, Image} from "react-native";
// useState — локальный стейт, useEffect — сайд-эффекты (загрузка данных и т.д.)
import {useEffect, useState} from "react";
// AsyncStorage — хранилище ключ-значение на устройстве (как localStorage в вебе)
import AsyncStorage from "@react-native-async-storage/async-storage";
// Haptics — тактильная обратная связь (вибрация при нажатии)
import * as Haptics from 'expo-haptics'


// Тип профиля — описывает форму объекта, TypeScript проверяет соответствие
type Profile = {
    name: string,
    bio: string
}

export default function HomeScreen() {

    // Значение поля name в TextInput (то что пользователь сейчас печатает)
    const [value, setValue] = useState("");
    // Значение поля bio в TextInput
    const [bioInput, setBioInput] = useState("");
    // Сохранённый профиль — то что отображается на экране
    const [profile, setProfile] = useState<Profile>({
        name: "",
        bio: "",
    });


    // Загружаем сохранённые данные из AsyncStorage
    useEffect(() => {
        const load = async () => {
            const name = await AsyncStorage.getItem('name')
            const bio = await AsyncStorage.getItem('bio')
            if (name) {
                // ?? '' — если значение null, подставляем пустую строку (защита от null в типе string)
                setProfile((prev) => ({...prev, name: name, bio: bio ?? ''}))
                setValue(name)
                setBioInput(bio ?? '')
            }
        }

        load()
    }, [])

    // Сохраняем данные при нажатии кнопки
    const handlePress = async () => {
        // Записываем каждое поле отдельным ключом в AsyncStorage
        await AsyncStorage.setItem('name', value)
        await AsyncStorage.setItem('bio', bioInput)
        // Обновляем отображаемый профиль
        setProfile((prev) => ({...prev, name: value, bio: bioInput}))
        // Вибрация Medium при нажатии
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        console.log(value)
    }

    return (
        // View — основной контейнер, как div в вебе
        <View style={styles.container}>
            <Text>My name is APP</Text>
            {/* Отображаем сохранённые данные профиля */}
            <Text>{profile.name}</Text>
            <Text>{profile.bio}</Text>
            {/* Image — компонент для картинок, source принимает uri или require() */}
            <Image
                source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 200, height: 200}}
            />
            {/* TextInput — поле ввода. value + onChangeText = controlled input */}
            <TextInput style={styles.input} value={value} onChangeText={(text) => setValue(text)} placeholder="Name" />
            <TextInput style={styles.input} value={bioInput} onChangeText={(text) => setBioInput(text)} placeholder="Bio" />
            {/* Pressable — кнопка, лучше чем TouchableOpacity для новых проектов */}
            <Pressable style={styles.button} onPress={handlePress}>
                <Text>Click Me</Text>
            </Pressable>
        </View>
    );
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
