import React, { useState } from "react";
import { Card, Button } from "reactstrap";
import "./Items.scss";

const Items = ({ menu }) => {
    const [data, setData] = useState(menu);

    const handleCat = (e) => {
        let newData = menu.filter(
            ({ category }) => e.target.value === category.name
        );
        setData(newData.length ? newData : menu);
    };

    return (
        <div className="main d-flex flex-column align-items-center py-5">
            <div className="categories">
                {menu
                    .reduce(
                        (acc, { category }) => {
                            return !acc.includes(category.name)
                                ? [...acc, category.name]
                                : acc;
                        },
                        ["All"]
                    )
                    .map((x, i) => {
                        return (
                            <Button
                                key={i}
                                value={x}
                                onClick={(e) => {
                                    handleCat(e);
                                }}
                                className="mx-3"
                            >
                                {x}
                            </Button>
                        );
                    })}
            </div>

            <div className="Items m-4">
                {data.map((item) => {
                    let { id, images, title, price } = item;
                    return (
                        <Card key={id} className="item-card">
                            <img
                                className="card-img"
                                src={images[0]}
                                alt={title}
                            />
                            <div className="desc p-2">
                                <p className="px-3">{title}</p>
                                <p className="price px-3"> ${price}</p>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Items;
