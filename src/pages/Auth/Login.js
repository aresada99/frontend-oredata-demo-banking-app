import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {loginSuccess, setUser} from "../features/auth/authSlice";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await api.post("/users/login", { username, password });
            dispatch(loginSuccess(response.data.data.token));
            dispatch(setUser({
                email: response.data.data.email,
                id: response.data.data.id,
                username: response.data.data.username
            }));

            navigate("/dashboard/home");
        } catch (err) {
            setError("Giriş başarısız. Lütfen kullanıcı adı ve şifrenizi kontrol edin.");
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "3rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
            <h2 style={{ textAlign: "center" }}>Giriş Yap</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Kullanıcı Adı
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "4px", marginBottom: "1rem" }}
                    />
                </label>
                <label>
                    Şifre
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "4px", marginBottom: "1rem" }}
                    />
                </label>
                <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#0077cc", border: "none", color: "white", borderRadius: "4px", cursor: "pointer", width: "100%" }}>
                    Giriş Yap
                </button>
                {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
