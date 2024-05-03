import { Navigate, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import './styles/app.css';

function MainRoutes() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
export default MainRoutes;