import React, { Component } from 'react';
import { StyleSheet, Modal, View, ScrollView, Image } from 'react-native';
import { Block, Button, Utils, Text } from 'expo-ui-kit';
import { FontAwesome } from '@expo/vector-icons';
import { images } from "../constants"
import serverList from "../constants/server"
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const { theme, rgba } = Utils;
const { SIZES, COLORS } = theme;

class VPN extends Component {
  state = {
    connected: false,
    show: false,
    server: null,
    automatic: {
      name: "Automatic",
      icons: ""
    }
  }

  handleConnect() {
    const { connected } = this.state
    this.setState({
      connected: !connected,
    })
  }
  handleServer(server) {
    this.setState({
      server,
      connected: true,
      show: false
    })
  }

  renderServer() {
    const { server, automatic } = this.state
    const connection = server || automatic;

    return (
      <Block flex={false} center middle white shadow style={styles.server} >
        <Button transparent>
          <Text margin={[40, 10, 0, 20]} center>{connection.name}</Text>
          <FontAwesome name="globe" size={70} color={COLORS.white} />
        </Button>
      </Block>
    )
  }
  renderServers() {
    const { show, server, automatic } = this.state
    const connection = server || automatic;
    return (
      <Modal visible={show} animationType="fade" transparent>
        <Block bottom gray>
          <Block flex={true} white middle padding={[SIZES.padding, 0]}>
            <Text middle center>Pick Your Server</Text>
            <ScrollView>
              {serverList?.map(item => {
                const isConnected = connection.name === item.name;
                // const isChecked = flag[isConnected ? "checked" : "unchecked"];
                return (
                  <Button key={item.name} transparent margin={[40, 10, 0, 20]} onPress={() => this.handleServer(item)}>
                    <Image source={{ uri: item.flag }} />
                    <Text>{item.name}</Text>
                    {/* <Image source={isChecked} /> */}
                  </Button>
                );
              })}
            </ScrollView>
          </Block>
        </Block>
      </Modal>
    )
  }

  render() {
    const { connected } = this.state
    return (
      <Block safe space='between' color={COLORS.white} flex={1}>
        <Block padding={[20, 0]} flex={false} center>
          <Text title accentColor style={{ fontWeight: 'bold', fontSize: 24 }}>
            VPN
          </Text>
        </Block>

        <Block center middle flex={false} >
          <Block flex={false} row middle white shadow radius={20} padding={[SIZES.base, SIZES.padding]} style={{ marginBottom: 20 }}>
            <Text subtitle semibold gray>   {connected ? "Connected" : "Connect"}</Text>
            <Block radius={10} flex={false} color={connected ? COLORS.success : COLORS.gray} style={styles.status}>

            </Block>
          </Block>
          <View style={connected ? styles.circle : styles.disableCircle}>
            <FontAwesome name="globe" size={70} color={COLORS.white} />
          </View>
          {connected ?  
          <Button style={connected ? styles.connectBtn : styles.dusableBtn} onPress={() => this.setState({ show: false,connected:false,automatic:{name:"Automatic"} })}>
            <Text center white bold caption margin={[12, 30]}>
               Disconnect
            </Text>
          </Button>
:
          <Button style={connected ? styles.connectBtn : styles.dusableBtn} onPress={() => this.setState({ show: true })}>
            <Text center white bold caption margin={[12, 30]}>
          connect
            </Text>
          </Button>
  }
        </Block>

        <Block flex={false} center middle white shadow style={styles.server} >
          <Button transparent onPress={() => this.handleServer()}>
            {this.renderServer()}
          </Button>
        </Block>
        {this.renderServers()}

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  disableCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  connectBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  dusableBtn: {
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    shadowColor: COLORS.primary,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  status: {
    width: 8,
    height: 8,
    marginLeft: 10,
    marginTop: 5
  },
  server: {
    width: SIZES.width,
    height: SIZES.base * 9,
  }
});

export default VPN;
