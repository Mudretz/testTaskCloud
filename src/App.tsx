import { Routes, Route } from "react-router-dom";
import './App.scss'
import AuthorizationPage from './components/screen/authorizationPage/AuthorizationPage'
import CreateUserPage from "./components/screen/createUserPage/CreateUserPage";

function App() {

    return (
        <div className="container">
            <Routes>
                <Route path="/testTaskCloud" element={<AuthorizationPage />} />
                <Route path="/create" element={<CreateUserPage />} />
            </Routes>
        </div>
    )
};

export default App
