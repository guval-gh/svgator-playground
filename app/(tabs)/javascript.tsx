import React from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import TestAnim from "../../assets/animations/lego";

export default function javascriptScreen() {
  const SVGatorWebView: any = React.createRef();

  const ReceiveMessage = (event: any) => {
    const data = JSON.parse(event.nativeEvent.data);
    console.log("Data :", data.event, data.offset);
  };

  const commands: any = {
    play: {},
    pause: {},
    toggle: {},
    stop: {},
    restart: {},
    seek: { command: "seek", param: 50 },
  };

  const sendCommand = (command: any, event: object) => {
    console.log("sendCommand", command);
    if (!commands[command]) {
      return;
    }

    const apiCommand = commands[command]["command"] || command;
    const apiCommandParam = commands[command]["param"] || "";

    const jsCommand = `document
                        && document.querySelector
                        && document.querySelector('svg')
                        && document.querySelector('svg').svgatorPlayer
                        && document.querySelector('svg').svgatorPlayer['${apiCommand}']
                        && document.querySelector('svg').svgatorPlayer['${apiCommand}'](${apiCommandParam});
                        true;
    `;

    SVGatorWebView.current.injectJavaScript(jsCommand);
  };

  const svgProps = {
    ref: SVGatorWebView,
    height: 310,
    onMessage: ReceiveMessage,
  };

  return (
    <View>
      <TestAnim {...svgProps} />
      <Text>Programmatic control only with premium/paid export</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          onPress={(event) => sendCommand("play", event)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome5 name="play" size={25} />
          </View>
        </Pressable>
        <Pressable
          onPress={(event) => sendCommand("pause", event)}
          style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
          })}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome5 name="pause" size={25} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
