export default () => ({
  expo: {
    name: "Decide Aí",
    slug: "decideai-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#161925"
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/624b0341-a7e1-471e-82ec-e9b57e3254eb"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true,
      userInterfaceStyle: "automatic",
      bundleIdentifier: "com.lailsonlm.decideaimobile"
    },
    android: {
      versionCode: 3,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#161925"
      },
      userInterfaceStyle: "automatic",
      package: "com.lailsonlm.decideaimobile"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "624b0341-a7e1-471e-82ec-e9b57e3254eb"
      },
      API_URL: process.env.API_URL,
      API_ACCESS_TOKEN: process.env.API_ACCESS_TOKEN
    },
    runtimeVersion: {
      policy: "sdkVersion"
    }
  }
})
