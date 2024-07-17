import React from "react";
import { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ShoppingCartOutlined,
    ProductOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Input } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const Admin = () => {
    let [collapsed, setCollapsed] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={["1"]}
                        items={[
                            {
                                key: "1",
                                icon: <ProductOutlined />,
                                label: (
                                    <NavLink to={"products"}>Products</NavLink>
                                ),
                            },
                            {
                                key: "2",
                                icon: <ShoppingCartOutlined />,
                                label: (
                                    <NavLink to={"menu"}>Added to menu</NavLink>
                                ),
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            paddingLeft: "0",
                        }}
                    >
                        <Button
                            type="text"
                            icon={
                                collapsed ? (
                                    <MenuUnfoldOutlined />
                                ) : (
                                    <MenuFoldOutlined />
                                )
                            }
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: "16px",
                                width: 64,
                                height: 64,
                                color: "white",
                            }}
                        />
                        <Search
                            style={{
                                width: "600px",
                                marginLeft: "440px",
                                marginTop: "12px",
                            }}
                            placeholder="Search text"
                            allowClear
                            enterButton="Search"
                            size="large"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: "lightgray",
                        }}
                    >
                        <Outlet search={search} />
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default Admin;
