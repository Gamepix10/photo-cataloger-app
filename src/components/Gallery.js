import React, { useState } from 'react';

const Gallery = () => {
    const [openFolders, setOpenFolders] = useState([]);
    const [activeFolder, setActiveFolder] = useState(null);

    const foldersData = [
        { id: 1, name: 'Vacation 2022', photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'] },
        { id: 2, name: 'Family Reunion', photos: ['photo4.jpg', 'photo5.jpg', 'photo6.jpg'] },

    ];

    const handleFolderClick = (folderId) => {
        setActiveFolder(folderId);
        if (openFolders.includes(folderId)) {
            setOpenFolders(openFolders.filter((id) => id !== folderId));
        } else {
            setOpenFolders([...openFolders, folderId]);
        }
    };

    return (
        <div className="gallery">
            <h2>Gallery</h2>
            <div className="folder-container">
                {foldersData.map((folder) => (
                    <div
                        className={`folder ${activeFolder === folder.id ? 'active' : ''} ${openFolders.includes(folder.id) ? 'open' : ''}`}
                        key={folder.id}
                        onClick={() => handleFolderClick(folder.id)}
                    >
                        <h3>{folder.name}</h3>
                        {openFolders.includes(folder.id) && (
                            <div className="folder-photos">
                                {folder.photos.map((photo, index) => (
                                    <img key={index} src={`/images/${folder.name}/${photo}`} alt="" />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;