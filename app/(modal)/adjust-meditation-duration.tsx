import { View, Text, Pressable } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { TimerContext } from "@/context/TimerContext";

const AdjustMeditationDuration = () => {
  const { setDuration } = useContext(TimerContext);

  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handlePress = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766367"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10 mt-10"
        >
          <AntDesign name="leftcircleo" size={40} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-center font-bold text-2xl text-white mb-12">
            Adjust Your Meditation Duration
          </Text>
          <View>
            <CustomButton
              title="60 seconds"
              onPress={() => handlePress(60)}
              containerStyles="mb-5 bg-green-300"
              textStyles="text-white"
            />
            <CustomButton
              title="5 minutes"
              onPress={() => handlePress(5 * 60)}
              containerStyles="mb-5 bg-green-500"
              textStyles="text-white"
            />
            <CustomButton
              title="10 minutes"
              onPress={() => handlePress(10 * 60)}
              containerStyles="mb-5 bg-green-700"
              textStyles="text-white"
            />
            <CustomButton
              title="15 minutes"
              onPress={() => handlePress(15 * 60)}
              containerStyles="mb-5 bg-green-900"
              textStyles="text-white"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustMeditationDuration;
