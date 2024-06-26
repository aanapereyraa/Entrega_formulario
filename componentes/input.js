
import { ImageBackground, StyleSheet, Text, SafeAreaView, TextInput, Button, View } from 'react-native';

export default function Input({onChange,editable,multiline,placeholder,numberOfLines,maxLength, secureTextEntry}){
    return(
        <SafeAreaView>
            <View>
                <TextInput
                    onChange = {onChange}
                    editable = {editable}
                    multiline = {multiline}
                    placeholder ={placeholder}
                    numberOfLines = {numberOfLines}
                    maxLength = {maxLength}
                    secureTextEntry = {secureTextEntry}
                    style = {styles.input}
                    

                />
            </View>

        </SafeAreaView>
        
    )
}
function Boton({ title,color}){
    return(
        <View>
            <Button
                title = {title}
                color ={color}
            />
        </View>
    )
}
const styles = StyleSheet.create ({
    input: {
        padding: 10,
        color: "#fff",
        fontFamily: 'Lobster',
        backgroundColor: "#000",
        borderRadius: 10,
        marginTop: 10,
      }
}

)
