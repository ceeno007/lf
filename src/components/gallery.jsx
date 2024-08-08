// import React, { useEffect, useState } from 'react';
// import '../style/gallery.css';
// import { fetchGalleryData } from '../service/galleryApiService.js';
// import Modal from 'react-modal';
// import { API_URL } from "../service/config.js";

// // Set the app element for accessibility
// Modal.setAppElement('#root');

// const Gallery = () => {
//     const [galleryData, setGalleryData] = useState([]);
//     const [selectedImage, setSelectedImage] = useState(null);

//     useEffect(() => {
//         const getGalleryData = async () => {
//             const data = await fetchGalleryData();

//             if (data && data.data) {
//                 // Flatten the nested images
//                 const images = data.data.flatMap(item => item.attributes.Images.data);
//                 setGalleryData(images);
//             }
//         };

//         getGalleryData();
//     }, []);

//     const openModal = (image) => {
//         setSelectedImage(image);
//     };

//     const closeModal = () => {
//         setSelectedImage(null);
//     };

//     const getImageUrl = (path) => `${API_URL}${path}`;

//     return (
//         <section className="gallery">
//             <div className="container">
//                 <div className="gallery-header">
//                     <h1 className="gallery-title">Gallery</h1>
//                 </div>
//                 <div className="gallery-content">
//                     {galleryData.length > 0 ? (
//                         galleryData.map((item, index) => (
//                             <div key={index} className="gallery-card" onClick={() => openModal(item)}>
//                                 <img src={getImageUrl(item.attributes.formats.thumbnail.url)} alt={item.attributes.name || 'Gallery Image'} className="gallery-image" />
//                             </div>
//                         ))
//                     ) : (
//                         <p>No images available.</p>
//                     )}
//                 </div>
//             </div>

//             {selectedImage && (
//                 <Modal isOpen={!!selectedImage} onRequestClose={closeModal} className="gallery-modal" overlayClassName="gallery-overlay">
//                     <img src={getImageUrl(selectedImage.attributes.url)} alt={selectedImage.attributes.name || 'Gallery Image'} className="modal-image" />
//                     {/* <p className="image-description">{selectedImage.attributes.name}</p> */}
//                     <button onClick={closeModal} className="modal-close-button">Close</button>
//                 </Modal>
//             )}
//         </section>
//     );
// };

// export default Gallery;
