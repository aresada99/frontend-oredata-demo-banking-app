import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import styles from "./CreateAccount.module.css";

const CreateAccount = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [balance, setBalance] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!name.trim()) {
            setError("Account name is mandatory.");
            return;
        }
        if (!balance || isNaN(balance) || Number(balance) < 0) {
            setError("Starting balance must be a positive number.");
            return;
        }

        try {
            setLoading(true);
            await api.post("/accounts", {
                name: name.trim(),
                balance: balance.toString(),
            });
            setLoading(false);
            navigate("/dashboard/accounts");
        } catch (err) {
            setLoading(false);
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("An error occurred while creating account.");
            }
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Create New Account</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label className={styles.label}>
                    Account Name
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                        required
                        placeholder="e.g. Main Account"
                    />
                </label>
                <label className={styles.label}>
                    Starting Balance
                    <input
                        type="number"
                        step="0.01"
                        min="0"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        className={styles.input}
                        required
                        placeholder="e.g. 1000.00"
                    />
                </label>

                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? "Creating..." : "Create Account"}
                </button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
};

export default CreateAccount;
