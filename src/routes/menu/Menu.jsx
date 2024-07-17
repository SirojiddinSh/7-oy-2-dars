import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

const Menu = () => {
    const dispatch = useDispatch();
    const menuProducts = useSelector((state) => state.menuProducts);

    const removeFromMenu = (product) => {
        dispatch({ type: "REMOVE_FROM_MENU", payload: product });
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
            title: "Remove from menu",
            render: (product) => (
                <Button type="primary" onClick={() => removeFromMenu(product)}>
                    Remove
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={menuProducts.map((item) => ({
                    ...item,
                    key: item.id,
                }))}
                size="middle"
            />
        </div>
    );
};

export default Menu;
