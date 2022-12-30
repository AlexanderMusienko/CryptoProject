import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  components: {
    Button: {
      baseStyle: {
        bg: "button",
        bgColor: "button",
        color: "white",
      },
    },
    Tab: {
      baseStyle: {
        bg: 'button',
        bgColor: 'button',
      }
    }
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      button: "#0165FF",
      primary: {
        default: "#ffffff",
        _dark: "#1A202C",
      },
      secondary: {
        default: "#0e1111",
        _dark: "#ffffff",
      },
    },
  },
});

