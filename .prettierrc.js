module.exports = {
    "semi": true,
    "trailingComma": "all",
    "singleQuote": true,
    "printWidth": 95,
    "tabWidth": 2,
    "jsxSingleQuote": true,
    "bracketSpacing": true,
    importOrder: [
      "expo-dev-client",
      "./shim",
      "raf/polyfill",
      "setimmediate",
      'react-native-url-polyfill',
      'intl-pluralrules',
      'react-native-gesture-handler',
      "^(react|react-native)$",
      "<THIRD_PARTY_MODULES>",
      "^@medico(.*)$",
      "^[./]",
    ],
    plugins: [require("./merged-prettier-plugin")],
  };
  