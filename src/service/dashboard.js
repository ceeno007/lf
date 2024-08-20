import { API_UPDATE_USER_URL, API_REGISTER_ITEM_URL, API_UPDATE_ITEM_STATUS_URL } from './apiEndpoints';


// services/dashboardService.js
export const fetchUserData = async (setUser, setItems, setTagsRegistered) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        const userItems = Object.values(storedUser.items);
        setUser(storedUser);
        setItems(userItems);
        setTagsRegistered(userItems.length);
    } else {
        window.location.href = "/signin";
    }
};

export const updateProfile = async (user, setModalMessage, setShowModal, setShowResultModal) => {
    try {
        // Create FormData object to handle binary data and other fields
        const formData = new FormData();

        // Append the necessary fields to the FormData object
        formData.append('full_name', user.full_name);
        formData.append('email_address', user.email_address);
        formData.append('address', user.address);
        formData.append('user_uuid', user.uuid);



        // If there's a profile picture (binary string), append it as well
        if (user.profile_picture) {
            formData.append('profile_picture', user.profile_picture);

        } else {

        }

        // Log the URL to ensure the correct endpoint
        const url = `${API_UPDATE_USER_URL}`;

        // Make the PUT request to the API using FormData
        const response = await fetch(url, {
            method: "PUT",
            body: formData,
        });

        // Log the response status for debugging


        // Check if the response was successful
        if (!response.ok) {
            const errorResponse = await response.json();

            throw new Error(errorResponse.message || "Failed to update profile");
        }

        // Parse the successful response and update local storage
        const result = await response.json();
        localStorage.setItem("user", JSON.stringify(result));

        // Trigger success modal and popup
        setModalMessage("Profile updated successfully! 🎉");


    } catch (error) {
        // Handle any errors and display them to the user

        setModalMessage("Error updating profile: " + error.message + " 😭");
        // setShowModal(false);
        // setShowResultModal(true);
    }
};
export const registerNewItem = async (newItem, setItems, triggerPopup, setTagsRegistered) => {
    try {


        const formData = new FormData();
        Object.keys(newItem).forEach((key) => {

            formData.append(key, newItem[key]);
        });

        const response = await fetch(API_REGISTER_ITEM_URL, {
            method: "POST",
            body: formData,
        });



        if (!response.ok) {
            const errorResponse = await response.json();

            triggerPopup(`Error registering new item: ${errorResponse.detail}`, "failure");
            throw new Error(errorResponse.message || "Failed to register new item");
        }

        const result = await response.json();


        setItems(prevItems => [...prevItems, result]);
        triggerPopup("Item registered successfully! Please log out and sign in again to see the updates.", "success", "res");


        setTagsRegistered(prev => prev + 1);
    } catch (error) {

        triggerPopup(`Error registering new item: ${error.message}`, "failure");
    }
};


export const updateItemStatus = async (tag_id, new_status, setItems) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || !storedUser.uuid) {
        console.error("User or UUID is not available.");
        return;
    }

    const url = new URL(API_UPDATE_ITEM_STATUS_URL);
    url.searchParams.append("uuid", storedUser.uuid);
    url.searchParams.append("tagid", tag_id);
    url.searchParams.append("new_status", new_status);

    try {
        const response = await fetch(url.toString(), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.message || `Failed to update item status: ${response.status}`);
        }

        const result = await response.json();
        setItems(prevItems =>
            prevItems.map((item) =>
                item.tag_id === tag_id ? { ...item, status: new_status } : item
            )
        );
    } catch (error) {
        // console.error("Error updating item status:", error);
    }
};
