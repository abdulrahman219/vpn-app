import React, { Component } from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';
import { Block, Button, Text, Utils } from 'expo-ui-kit';
import { background } from '../constants/images';

class Welcome extends Component {
    render() {
        const { navigation } = this.props;
        const backgrounds = [
            {
                title: "Secure",
                description: "Your data is secure with us.",
                img: background.welcome,
            },
            {
                title: "Encrypted",
                description: "We use top-notch encryption technology.",
                img: background.encryption,
            },
            {
                title: "Privacy",
                description: "Your privacy is our top priority.",
                img: background.privacy,
            },
        ];

        const { theme } = Utils;
        const { SIZES, COLORS } = theme;

        return (
            <Block safe>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={{ height: SIZES.height * 0.5 }}
                >
                    {backgrounds.map((item, key) => (
                        <Block
                            key={key}
                            center
                            middle
                            color={COLORS.white}
                            style={{
                                width: SIZES.width,
                                height: '100%',
                                shadowColor: COLORS.black,
                                shadowOpacity: 0.2,
                                shadowRadius: 10,
                                shadowOffset: { width: 0, height: 4 },
                                elevation: 5,
                                borderRadius: 20,
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: SIZES.width * 0.8,
                                    height: '50%',
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                }}
                            />
                            <Text h2 bold marginTop={20} color={COLORS.primary}>
                                {item.title}
                            </Text>
                            <Text center color={COLORS.gray} margin={[10, 20]}>
                                {item.description}
                            </Text>
                        </Block>
                    ))}
                </ScrollView>

                <Block center middle>
                    <Button
                        primary
                        onPress={() => navigation.navigate("VPN")}
                        style={{
                            marginTop: 30,
                            backgroundColor: COLORS.primary,
                            width: SIZES.width * 0.6,
                            borderRadius: 10,
                        }}
                    >
                        <Text center white caption margin={[12, 30]}>
                            Get Started
                        </Text>
                    </Button>
                </Block>
            </Block>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({});
