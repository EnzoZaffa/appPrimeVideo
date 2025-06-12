import { StyleSheet, Text, View } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";
import AmazonLogo from "../../assets/amazon_logo.png";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeVideoLogo} />
                <Image />
            </View>
        </View>
    );
}

const status = StyleSheet.create({
    container: {
        flex: 1,
    },
});