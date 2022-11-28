import {Routes, Route} from 'react-router-dom';
import LoginForm from '../../components/AuthForms/LoginForm/LoginForm';
import RegisterForm from '../../components/AuthForms/RegisterForm/RegisterForm';
import DashBoard from '../../components/AuthForms/DashBoard/DashBoard'

const AuthView = () =>{
    return(
        <div>
            <Routes>
                <Route path='signin' element={<LoginForm />}/>
                <Route path='signup' element={<RegisterForm />}/>
                <Route path='dashboard' element={<DashBoard/>}/>
            </Routes>
        </div>
    )
}

export default AuthView;