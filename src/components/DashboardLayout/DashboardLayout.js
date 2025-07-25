import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.navLinks}>
                    <NavLink
                        to="/dashboard/home"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                        }
                    >
                        Ana Sayfa
                    </NavLink>
                    <NavLink
                        to="/dashboard/accounts"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                        }
                    >
                        Hesaplar
                    </NavLink>
                    <NavLink
                        to="/dashboard/transfer"
                        className={({ isActive }) =>
                            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                        }
                    >
                        Havale
                    </NavLink>
                </div>
                <button onClick={handleLogout} className={styles.logoutButton}>
                    Çıkış Yap
                </button>
            </nav>

            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
