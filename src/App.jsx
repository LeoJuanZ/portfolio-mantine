import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { theme } from "./themes/DefaultTheme";

const App = () => (
  <MantineProvider
    theme={theme}
    defaultColorScheme="auto"
  >
    <RouterProvider
      future={{
        v7_startTransition: true,
      }}
      router={router}
    />
  </MantineProvider>
);

export default App;