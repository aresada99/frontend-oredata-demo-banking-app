import {useSelector} from "react-redux";
import Card from "../components/Card/Card";
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        document.title = "OreBank - Home";
    }, []);

    const user = useSelector((state) => state.auth.user);

    return (
        <div>
            <h1><span style={{color : "#2db2ea"}}>Ore</span>Bank</h1>
            <p>Welcome, {user ? user.username : "Guest"}</p>

            <div style={{display: "flex"}}>
            <Card
                title="Accounts"
                description="View your all accounts"
                route="/dashboard/accounts"
            />
            <Card
                title="Transfer"
                description="Transfer to another account"
                route="/dashboard/transfer"
            />
            </div>
        </div>
    );
};

export default Home;
