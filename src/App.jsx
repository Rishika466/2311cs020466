import { CssBaseline, Container } from "@mui/material";
import { NotificationsPage } from "./pages/NotificationsPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <NotificationsPage />
      </Container>
    </>
  );
}

export default App;