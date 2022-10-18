import { Input, Button } from "reactstrap";
import "./Filter.scss";
import Items from "../Items/Items";
import { useState } from "react";

const Filter = ({ menu }) => {
    const [data, setData] = useState(menu);

    const handleReset = () => {
        setData(menu);
    };

    const handleSearch = (e) => {
        let newData = menu.filter((x) => x.title.search(e.target.value) > -1);
        setData(newData);
        console.log(newData);
    };

    const handleFilter = (e) => {};

    return (
        <>
            <form className="Filter">
                <Input
                    onChange={(e) => handleSearch(e)}
                    placeholder="Search"
                    className="search my-4"
                />
                <p>Price Filter</p>
                <div className="min-max">
                    <Input
                        onChange={(e) => handleFilter(e)}
                        placeholder="min"
                        type="number"
                        className="num"
                    />
                    <Input
                        onChange={(e) => handleFilter(e)}
                        placeholder="max"
                        type="number"
                        className="num "
                    />
                    <Button
                        type="reset"
                        onClick={handleReset}
                        className="reset"
                        outline
                    >
                        Reset
                    </Button>
                </div>
            </form>
            <Items menu={data} />
        </>
    );
};

export default Filter;
