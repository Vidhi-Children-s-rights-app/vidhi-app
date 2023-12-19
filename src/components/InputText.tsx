import { StyleSheet, Text, TextInput, View } from "react-native";
import { ErrorMessage, useField } from "formik";

export default function InputText({ ...props }) {
    const [field, meta] = useField(props);
    return (
        <View>
            <TextInput {...field} {...props} style={styles.inputText} />
            <ErrorMessage component={'Text'} name={field.name} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    inputText: {
        width: "100%",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});