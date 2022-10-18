import "./Main.scss";
import Filter from "../Filter/Filter";
import menu from "../../helper/data";
import Header from "../Header/Header";

const Main = () => {
    return (
        <>
            <Header />
            <div className="Main d-flex flex-row px-4">
                <Filter menu={menu} />
            </div>
        </>
    );
};

export default Main;
