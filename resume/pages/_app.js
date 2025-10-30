import "@/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }) {
  return( 
  <>
  <Provider store={store}>
  <CssBaseline/>
<Component {...pageProps} />
</Provider>
  </>
  );
}
