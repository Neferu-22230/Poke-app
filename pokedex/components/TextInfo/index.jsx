import { StyleSheet, Text, View } from "react-native";

export default function TextInfor ({ lebal, text }) {
    return (
        <Text style={StyleSheet.text}>
            <Text style={StyleSheet.bold}>{labbel}:</Text> {text}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 18,
        textAlign: "justify",
        marginBottom: 10
    },
    bold: {
        fontWeight: "bold"
    }
});