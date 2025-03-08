import { useAuth } from "../auth/AuthContext";

const Login = () => {
    const { login } = useAuth();

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
