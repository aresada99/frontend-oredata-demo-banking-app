import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";
import styles from "./AuthForm.module.css";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        document.title = "OreBank - Register";
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await api.post("/users/register", { username, email, password });
            navigate("/login");
        } catch (err) {
            setError("Registration failed. Please verify your details and try again.");

        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}><span style={{color : "#004085"}}>Ore</span>Bank</h1>
            <h2 className={styles.title}>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="Username"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="yourmail@mail.com"
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="**************"
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Register</button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
            <div className={styles.switchLink}>
                Already have an account? <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Register;
