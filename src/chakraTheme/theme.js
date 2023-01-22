import { extendTheme } from "@chakra-ui/react";
import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle, defineStyleConfig } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    bg: "avatar",
  },
});
export const avatarTheme = defineMultiStyleConfig({ baseStyle });

export default extendTheme({
  components: {
    Avatar: avatarTheme,
    Button: {
      variants: {
        solid: {
          bg: "button",
          bgColor: "button",
          color: "white",
        },
        solidGrey: {
          bg: "secondButton",
          _hover: {
            bg: "",
          },
          _active: {
            bg: "activeBg",
            color: "activeBg"
          },
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      hoverBg: "",
      activeBg: "white",
      button: "#1975FF",
      secondButton: "#E2E8F0",
      avatar: "#FFB320",
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
