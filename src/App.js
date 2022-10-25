import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { HomeScreen } from "./home/HomeScreen";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 100,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function App() {
  return (
    // <Modal
    //   open={true}
    //   onClose={() => {
    //     console.log("HOLA");
    //   }}
    //   aria-labelledby="modal-modal-title"
    //   aria-describedby="modal-modal-description"
    // >
    //   <Box sx={style}>
    //     <Typography id="modal-modal-title" variant="h6" component="h2">
    //       What's your name ?
    //     </Typography>
    //     <input type="text" />
    //   </Box>
    // </Modal>
    <HomeScreen />
  );
}

export default App;
