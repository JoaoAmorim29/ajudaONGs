import React from "react";
import { View, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";

export default function Filter(){

    return <View>
                <Text>Filtrar</Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                />
        </View>
}