import {Home} from "./components/Home.jsx";
import {Route, Routes} from "react-router";
import {Result} from "./components/Result.jsx";

import './App.css'
import {Container} from "@mui/material";

function App() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/resultado" element={<Result />}  />
            </Routes>
        </main>
    )
}

export default App
