import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import styles from "./AccountDetails.module.css";
import {ArrowLeftIcon} from '@heroicons/react/24/solid';

const AccountDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [account, setAccount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        const fetchAccount = async () => {
            setLoading(true);
            setError("");
            try {
                const response = await api.get(`/accounts/${id}`);
                const acc = response.data.data;
                setAccount(acc);
                setName(acc.name);
            } catch (err) {
                setError("Hesap bulunamadı veya bir hata oluştu.");
            } finally {
                setLoading(false);
            }
        };
        fetchAccount();
    }, [id]);

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleSave = async () => {
        if (!name.trim()) {
            setError("Hesap adı boş olamaz.");
            return;
        }
        try {
            setError("");
            const response = await api.put(`/accounts/${id}`, { name });
            setAccount(response.data.data);
            setEditMode(false);
        } catch (err) {
            setError("Güncelleme sırasında hata oluştu.");
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Bu hesabı silmek istediğinize emin misiniz?")) {
            try {
                await api.delete(`/accounts/${id}`);
                navigate("/dashboard/accounts");
            } catch (err) {
                setError("Silme işlemi sırasında hata oluştu.");
            }
        }
    };

    const handleBack = () => {
        navigate('/dashboard/accounts');
    };

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p className={styles.error}>{error}</p>;
    if (!account) return <p>Hesap bulunamadı.</p>;

    return (
        <div className={styles.container}>
            <button onClick={handleBack} className={styles.backButton}>
                <ArrowLeftIcon className={styles.backIcon} />
                Back to Accounts
            </button>
            <h2 className={styles.title}>Hesap Detayları</h2>

            <div className={styles.section}>
                <label className={styles.label}>Hesap Numarası:</label>
                <div className={styles.value}>{account.number}</div>
            </div>

            <div className={styles.section}>
                <label className={styles.label}>Bakiye:</label>
                <div className={styles.value}>
                    {account.balance.toLocaleString("tr-TR", {
                        style: "currency",
                        currency: "TRY",
                    })}
                </div>
            </div>

            <div className={styles.section}>
                <label className={styles.label}>Hesap Adı:</label>
                {editMode ? (
                    <input
                        className={styles.input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                ) : (
                    <div className={styles.value}>{account.name}</div>
                )}
            </div>

            {!editMode ? (
                <button className={`${styles.button} ${styles.editButton}`} onClick={handleEdit}>
                    Düzenle
                </button>
            ) : (
                <div className={styles.buttonGroup}>
                    <button className={`${styles.button} ${styles.saveButton}`} onClick={handleSave}>
                        Kaydet
                    </button>
                    <button className={`${styles.button} ${styles.deleteButton}`} onClick={handleDelete}>
                        Sil
                    </button>
                    <button
                        className={`${styles.button} ${styles.cancelButton}`}
                        onClick={() => {
                            setEditMode(false);
                            setName(account.name);
                            setError("");
                        }}
                    >
                        İptal
                    </button>
                </div>
            )}

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default AccountDetails;
