import { Table, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const loading = useSelector((state) => state.loading);

    useEffect(() => {
        const loadData = async () => {
            try {
                dispatch({ type: "LOADING_PRODUCTS" });
                const response = await fetch("https://dummyjson.com/recipes");
                const data = await response.json();
                const addedProduct = data.recipes.map((product) => ({
                    ...product,
                    added: false,
                }));

                dispatch({ type: "SET_PRODUCTS", payload: addedProduct });
            } catch (err) {
                console.log(err);
            }
        };

        loadData();
    }, [dispatch]);

    const addToMenu = (product) => {
        dispatch({ type: "ADD_TO_MENU", payload: { ...product, added: true } });
        localStorage.setItem(
            "menuProducts",
            JSON.stringify([...products, product])
        );
    };

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            render: (item) => <img src={item} alt="image" width={100} />,
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Rating",
            dataIndex: "rating",
        },
        {
            title: "Add to menu",
            render: (product) => (
                <Button
                    disabled={product.added}
                    type="primary"
                    onClick={() => addToMenu(product)}
                >
                    Add
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={products.map((item) => ({ ...item, key: item.id }))}
                loading={loading}
                size="middle"
            />
        </div>
    );
};

export default Products;
