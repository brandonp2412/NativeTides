import { Dimensions, Text, View } from "react-native";
// import { LineChart } from "react-native-chart-kit";
import { styles } from "./utils";

export default function Packages() {
  return (
    <View>
      <Text style={styles.title}>Money in the bank</Text>
      {/* <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#30397B",
          backgroundGradientFrom: "#5f6a6a",
          backgroundGradientTo: "#3b4e6b",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          margin: 8,
          borderRadius: 16,
        }}
      /> */}
    </View>
  );
}
