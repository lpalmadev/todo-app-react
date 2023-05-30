import { useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../@types";

const initialState : RegisterForm = { email: '', password: ''}

function Register() {
    const [register, setRegister] = useState<RegisterForm>(initialState)
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleChange = ({ target: {name, value} } : React.ChangeEvent<HTMLInputElement>) => {
        setRegister({...register, [name]: value}) 
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        signup(register.email, register.password);
        navigate('/', { replace: true});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="" onChange={handleChange}></input>

                <label htmlFor="password">Contraseña</label>
                <input name="password" type="password" id="password" onChange={handleChange}></input>

                <button>Register</button>
            </form>
        </div>
    )
}
export default Register