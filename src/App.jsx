import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <MantineProvider >
        <RouterProvider
          future={{
            v7_startTransition: true,
          }}
          router={router}
        />
      </MantineProvider>
    </>
  );
}

export default App;