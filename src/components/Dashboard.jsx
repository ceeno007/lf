import React, { useState, useEffect } from 'react';
import { fetchUserData, updateItemStatus, registerNewItem, updateProfile } from '../service/dashboard.js';
import '../style/Dashboard.css';

const DashboardPage = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const [user, setUser] = useState(storedUser || null);
    const [currentPage, setCurrentPage] = useState("overview");
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [newItem, setNewItem] = useState({
        item_id: "",
        item_type: "",
        item_name: "",
        tag_id: "",
        item_image: "",
        item_description: "",
        status: "0",
        uuid: storedUser?.uuid || "",
    });
    const [uploadedImageURL, setUploadedImageURL] = useState("");
    const [profileImage, setProfileImage] = useState(""); // For profile image upload
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [items, setItems] = useState([]);
    const [tagsRegistered, setTagsRegistered] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [popupType, setPopupType] = useState(""); // 'success' or 'failure'

    useEffect(() => {
        fetchUserData(setUser, setItems, setTagsRegistered);
    }, []);

    const triggerPopup = (message, type) => {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setNewItem(prevItem => ({ ...prevItem, item_image: file }));
            const reader = new FileReader();
            reader.onload = (e) => setUploadedImageURL(e.target.result);
            reader.readAsDataURL(file);
        } else {
            triggerPopup("Please select a valid image file.", "failure");
        }
    };

    const handleProfileImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            setProfileImage(file);
            const reader = new FileReader();
            reader.onload = (e) => setUploadedImageURL(e.target.result); // Show the preview of the image
            reader.readAsDataURL(file);
        } else {
            triggerPopup("Please select a valid image file for your profile picture.", "failure");
        }
    };

    const handleProfileSave = () => {
        if (!user.full_name || !user.email_address || !user.phone_number || !user.address) {
            triggerPopup("All profile fields are required.", "failure");
            return;
        }

        setIsLoading(true);

        // Pass profileImage for update along with user information
        updateProfile(
            { ...user, profile_picture: profileImage },
            triggerPopup
        )
            .then(() => {
                setIsLoading(false);
                fetchUserData(setUser, setItems, setTagsRegistered); // Refresh user data after save
            })
            .catch(() => setIsLoading(false));
    };

    const handleRegisterNewItem = () => {
        if (!newItem.item_name || !newItem.item_type || !newItem.tag_id || !newItem.item_description || !newItem.item_image) {
            triggerPopup("All item fields are required.", "failure");
            return;
        }

        setIsLoading(true);
        registerNewItem(newItem, setItems, triggerPopup, setTagsRegistered)
            .then(() => {
                setShowModal(false);
                fetchUserData(setUser, setItems, setTagsRegistered); // Refresh dashboard after registration
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    };

    const filteredItems = () => {
        if (searchQuery.trim() === "") {
            return items;
        }
        return items.filter((item) =>
            item.item_name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <div className="dashboard-container">
            <header className="navbar">
                <p className="navbar-label">LFReturnMe</p>
                <nav>
                    <button onClick={() => setCurrentPage('overview')}>Overview</button>
                    <button onClick={() => setCurrentPage('profile')}>Profile</button>
                    <button onClick={() => {
                        localStorage.removeItem('user');
                        window.location.href = '/signin';
                    }}>Logout</button>
                </nav>
            </header>

            {currentPage === "overview" && (
                <div className="overview">
                    <div className="tags-registered">
                        <p>Tags Registered: {tagsRegistered}</p>
                    </div>
                    <input
                        type="text"
                        placeholder="Search items..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input"
                    />
                    <br />
                    <button className="button" onClick={() => { setShowModal(true); setModalType('register'); }}>Register New Item</button>
                    <div className="table-container">
                        <table className="items-table">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Tag</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredItems().map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.item_image && (
                                                <img src={item.item_image} alt="Item" className="item-image" />
                                            )}
                                        </td>
                                        <td>{item.item_name}</td>
                                        <td>{item.item_type}</td>
                                        <td>{item.tag_id}</td>
                                        <td>{item.item_description}</td>
                                        <td>
                                            <select
                                                value={item.status}
                                                onChange={(e) => updateItemStatus(item.tag_id, e.target.value, setItems)}
                                                className="select"
                                            >
                                                <option value="0">Active</option>
                                                <option value="1">Lost</option>
                                                <option value="2">Found</option>
                                                <option value="3">Archived</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {currentPage === "profile" && user && (
                <div className="profile">
                    <br />
                    <br />
                    <img src={uploadedImageURL || user.profile_picture} alt="Profile" className="profile-picture" />
                    <div className="profile-details">
                        <br />
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={user.full_name}
                                onChange={(e) => setUser({ ...user, full_name: e.target.value })}
                                className="input"
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                value={user.email_address}
                                onChange={(e) => setUser({ ...user, email_address: e.target.value })}
                                className="input"
                            />
                        </div>
                        <div>
                            <label>Phone:</label>
                            <input
                                type="text"
                                value={user.phone_number}
                                onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
                                className="input"
                            />
                        </div>
                        <div>
                            <label>Address:</label>
                            <input
                                type="text"
                                value={user.address}
                                onChange={(e) => setUser({ ...user, address: e.target.value })}
                                className="input"
                            />
                        </div>
                        <div>
                            <label>Profile Picture:</label>
                            <input
                                type="file"
                                onChange={handleProfileImageUpload}
                                className="input"
                            />

                        </div>
                        <button className="button" onClick={handleProfileSave}>
                            {isLoading ? 'Saving...' : 'Save Changes'}
                        </button>
                    </div>
                </div>
            )}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{modalType === "register" ? "Register New Item" : "Update Profile"}</h2>
                        {modalType === "register" && (
                            <div>
                                <input
                                    type="text"
                                    placeholder="Item ID"
                                    onChange={(e) => setNewItem(prev => ({ ...prev, item_id: e.target.value }))}
                                    className="input"
                                />
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    onChange={(e) => setNewItem(prev => ({ ...prev, item_name: e.target.value }))}
                                    className="input"
                                />
                                <input
                                    type="text"
                                    placeholder="Item Type"
                                    onChange={(e) => setNewItem(prev => ({ ...prev, item_type: e.target.value }))}
                                    className="input"
                                />
                                <input
                                    type="text"
                                    placeholder="Tag ID"
                                    onChange={(e) => setNewItem(prev => ({ ...prev, tag_id: e.target.value }))}
                                    className="input"
                                />
                                <input
                                    type="text"
                                    placeholder="Item Description"
                                    onChange={(e) => setNewItem(prev => ({ ...prev, item_description: e.target.value }))}
                                    className="input"
                                />
                                <input
                                    type="file"
                                    onChange={handleFileUpload}
                                    className="input"
                                />
                                {uploadedImageURL && <img src={uploadedImageURL} alt="Uploaded" className="uploaded-image" />}
                                <button className="button" onClick={handleRegisterNewItem}>
                                    {isLoading ? 'Registering...' : 'Submit'}
                                </button>
                            </div>
                        )}
                        <button className="button-close" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}

            {showPopup && (
                <div className={`popup ${popupType}`}>
                    <p>{popupMessage}</p>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;
