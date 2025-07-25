import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../../slices/accountSlice';
import styles from './Accounts.module.css';
import { useNavigate } from 'react-router-dom';
import {DocumentMagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Accounts = () => {
    const dispatch = useDispatch();
    const { accounts, loading, error } = useSelector((state) => state.accounts);

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAccounts({ number: '', name: '' }));
    }, [dispatch]);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(fetchAccounts({ number, name }));
    };

    const handleReset = () => {
        setNumber('');
        setName('');
        dispatch(fetchAccounts({ number: '', name: '' }));
    };

    const handleEdit = (account) => {
        navigate(`/dashboard/accounts/${account.id}`);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Hesaplarım</h2>
            <form onSubmit={handleSearch} className={styles.form}>
                <div className={styles.leftGroup}>
                    <input
                        type="text"
                        placeholder="Hesap Numarası"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="Hesap Adı"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={styles.input}
                    />
                    <button type="submit" className={styles.button}>Ara</button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className={`${styles.button} ${styles.resetButton}`}
                    >
                        Sıfırla
                    </button>
                </div>

                <div className={styles.rightGroup}>
                    <button
                        type="button"
                        className={styles.createButton}
                        onClick={() => navigate('/dashboard/accounts/new')}
                    >
                        Hesap Oluştur
                    </button>
                </div>
            </form>

            {loading && <p>Yükleniyor...</p>}
            {error && <p className={styles.error}>{error}</p>}

            <table className={styles.table}>
                <thead className={styles.thead}>
                <tr>
                    <th className={styles.th}>Hesap Numarası</th>
                    <th className={styles.th}>Hesap Adı</th>
                    <th className={styles.th}>Bakiye</th>
                    <th className={styles.th}>İşlem</th>
                </tr>
                </thead>
                <tbody>
                {accounts.map((acc) => (
                    <tr key={acc.id} className={styles.tr}>
                        <td className={styles.td}>{acc.number}</td>
                        <td className={styles.td}>{acc.name}</td>
                        <td className={`${styles.td} ${styles.balance}`}>
                            {acc.balance.toLocaleString('tr-TR', {
                                style: 'currency',
                                currency: 'TRY',
                            })}
                        </td>
                        <td className={styles.td}>
                            <button
                                className={styles.editButton}
                                onClick={() => handleEdit(acc)}
                                title="View Details"
                            >
                                View Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Accounts;
