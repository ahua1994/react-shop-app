import { Input, Button, Card } from "reactstrap";
import "./Filter.scss";
import "./Items.scss";
import { useState } from "react";

const Filter = ({ menu }) => {
    const [data, setData] = useState(menu);
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [show, setShow] = useState(false);

    const handleReset = () => {
        setData(menu);
        setShow(false);
    };

    const handleSearch = e => {
        let newData = menu.filter(
            x => x.title.toLowerCase().search(e.target.value.toLowerCase()) > -1
        );
        setData(newData.length ? newData : menu);
        setShow(newData.length ? false : true);
    };

    const handleMin = e => {
        let newValue = e.target.value;
        setMin(newValue);
        let newData = menu.filter(x => x.price >= min && x.price <= max);
        setData(newData);
        setShow(newData.length ? false : true);
    };

    const handleMax = e => {
        let newValue = e.target.value;
        setMax(newValue);
        let newData = menu.filter(x => x.price >= min && x.price <= max);
        setData(newData);
        setShow(newData.length ? false : true);
    };

    const handleCat = e => {
        let newData = data.filter(({ category }) => e.target.value === category.name);
        if (min && max) {
            newData = newData.filter(({ price }) => price >= min && price <= max);
        }
        setData(newData.length ? newData : menu);
    };

    return (
        <>
            <form className="Filter">
                <Input
                    onChange={e => handleSearch(e)}
                    placeholder="Search"
                    className="search my-4"
                />
                <p>Price Filter</p>
                <div className="min-max">
                    <Input
                        onChange={e => handleMin(e)}
                        placeholder="min"
                        type="number"
                        className="num"
                        min={0}
                    />
                    <Input
                        onChange={e => handleMax(e)}
                        placeholder="max"
                        type="number"
                        className="num "
                        min={0}
                    />
                    <Button type="reset" onClick={handleReset} className="reset" outline>
                        Reset
                    </Button>
                </div>
            </form>

            <div className="main d-flex flex-column align-items-center py-5">
                <div className="categories">
                    {menu
                        .reduce(
                            (acc, { category }) => {
                                return !acc.includes(category.name) ? [...acc, category.name] : acc;
                            },
                            ["All"]
                        )
                        .map((x, i) => {
                            return (
                                <Button
                                    key={i}
                                    value={x}
                                    onClick={e => {
                                        handleCat(e);
                                    }}
                                    className="mx-3"
                                >
                                    {x}
                                </Button>
                            );
                        })}
                </div>
                <h3 style={{ display: show ? "block" : "none" }}>No Results.</h3>
                <div className="Items m-4">
                    {data.map((item, i) => {
                        let { images, title, price } = item;
                        return (
                            <Card key={i} className="item-card">
                                <img className="card-img" src={images[0]} alt={title} />
                                <div className="desc p-2">
                                    <p className="px-3">{title}</p>
                                    <p className="price px-3"> ${price}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Filter;
