import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Company } from "../screens/Company";
import { TabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="home"
        component={TabRoutes}
      />
      <Screen 
        name="company"
        component={Company}
      />
    </Navigator>
  )
}
