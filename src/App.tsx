import './App.scss';
import { Routes, Route } from "react-router-dom";
import AuthorizationPage from './components/screen/authorizationPage/AuthorizationPage'
import CreateUserPage from "./components/screen/createUserPage/CreateUserPage";
import NotFoundPage from "./components/screen/notFoundPage.tsx/NotFoundPage";

function App() {

    return (
        <div className="container">
            <Routes>
                <Route path="/testTaskCloud" element={<AuthorizationPage />} />
                <Route path="/create" element={<CreateUserPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
};

export default App;
