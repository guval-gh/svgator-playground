import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import legoAnimation from "../../assets/animations/lego.lottie";
import { Pressable, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function lottieScreen() {
  const animationRef = useRef<LottieView>(null);

  const play = () => {
    animationRef.current?.play();
  };

  const pause = () => {
    animationRef.current?.pause();
  };

  const stop = () => {
    animationRef.current?.reset();
  };

  const playFromPosition = (position: number) => {
    animationRef.current?.play(position);
  };

  return (
    <View>
      <LottieView
        ref={animationRef}
        source={legoAnimation}
        style={{ width: "100%", height: "80%" }}
      />
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable onPress={play}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome5 name="play" size={25} />
          </View>
        </Pressable>
        <Pressable onPress={pause}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome5 name="pause" size={25} />
          </View>
        </Pressable>
        <Pressable onPress={stop}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome5 name="stop" size={25} />
          </View>
        </Pressable>
        <Pressable onPress={() => playFromPosition(0.9)}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FontAwesome5 name="forward" size={25} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}
