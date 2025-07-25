import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

const Register = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await api.post("/users/register", { username, email, password });

            // Başarılı ise login sayfasına yönlendir
            navigate("/login");
        } catch (err) {
            setError("Kayıt başarısız. Lütfen bilgilerinizi kontrol edin.");
            console.error(err);
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "3rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "6px" }}>
            <h2 style={{ textAlign: "center" }}>Kayıt Ol</h2>
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
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <button
                    type="submit"
                    style={{
                        padding: "10px 15px",
                        backgroundColor: "#0077cc",
                        border: "none",
                        color: "white",
                        borderRadius: "4px",
                        cursor: "pointer",
                        width: "100%",
                    }}
                >
                    Kayıt Ol
                </button>
                {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}
            </form>
        </div>
    );
};

export default Register;
