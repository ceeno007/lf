import React, { useState } from "react";
import { Layout, Menu, Card, Form, Input, Button, Spin, message } from "antd";
import {
    UserOutlined,
    CreditCardOutlined,
    HistoryOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../context/AuthContext";
import { API } from "../constant";
import { getToken } from "../service/authService";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState("overview");
    // const { user, isLoading, setUser } = useAuthContext();

    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case "profile":
                return <ProfileUpdate />;
            case "payments":
                return <Payments />;
            case "overview":
                return <Overview />;
            default:
                return <Overview />;
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="overview" icon={<HistoryOutlined />}>
                        Overview
                    </Menu.Item>
                    <Menu.Item key="profile" icon={<UserOutlined />}>
                        Profile Update
                    </Menu.Item>
                    <Menu.Item key="payments" icon={<CreditCardOutlined />}>
                        Payments
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {renderContent()}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

const ProfileUpdate = () => {
    const [loading, setLoading] = useState(false);
    const { user, isLoading, setUser } = useAuthContext();

    const handleProfileUpdate = async (data) => {
        setLoading(true);
        try {
            const response = await fetch(`${API}/users/${user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getToken()}`,
                },
                body: JSON.stringify(data),
            });
            const responseData = await response.json();
            setUser(responseData);
            message.success("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            message.error("Error updating the profile!");
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <Spin size="large" />;
    }

    return (
        <Card title="Update Profile">
            <Form
                layout="vertical"
                initialValues={{
                    username: user?.username,
                    email: user?.email,
                }}
                onFinish={handleProfileUpdate}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: "Username is required!" }]}
                >
                    <Input placeholder="Username" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: "Email is required!" }]}
                >
                    <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Password is required!" }]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                    Save
                </Button>
            </Form>
        </Card>
    );
};

const Payments = () => {
    return (
        <Card title="Payments">
            {/* Payment window component or logic here */}
            <p>Payment functionality goes here.</p>
        </Card>
    );
};

const Overview = () => {
    return (
        <Card title="Overview">
            {/* Payment history and other overview information */}
            <p>Payment history and overview data go here.</p>
        </Card>
    );
};

export default Dashboard;
