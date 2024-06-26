//creación del componente, para reutilizar en otro archivo. Lo cual reducira el código y son más flexibles
import {Button, View } from 'react-native';

export default function Boton({ title,color}){
    return(
        <View>
            <Button
                title = {title}
                color ={color}
            />
        </View>
    )
}