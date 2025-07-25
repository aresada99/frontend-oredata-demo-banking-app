import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../../thunks/accountThunk';
import { useNavigate } from 'react-router-dom';
import styles from './Transfer.module.css';

const Transfer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { accounts, loading, error } = useSelector(state => state.accounts);

    useEffect(() => {
        dispatch(fetchAccounts({ number: '', name: '' }));
    }, [dispatch]);

    const handleSelect = (account) => {
        // Seçilen hesabın tüm objesini query parametre ya da state olarak gönderebilirsin
        navigate('/dashboard/transfer/details', { state: { fromAccount: account } });
    };

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p className={styles.error}>{error}</p>;

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Transfer Yapmak İstediğiniz Hesabı Seçin</h2>
            <ul className={styles.accountList}>
                {accounts.map((acc) => (
                    <li key={acc.id} className={styles.accountItem} onClick={() => handleSelect(acc)}>
                        <div><strong>{acc.number}</strong> - {acc.name}</div>
                        <div>{acc.balance.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transfer;
