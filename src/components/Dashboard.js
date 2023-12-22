import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {

    const foldersData = [
        { id: 1, name: 'Preview', photos: ['photo7.jpg', 'photo8.jpg', 'photo9.jpg'] },
        { id: 2, name: 'Vacation 2022', photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'] },
        { id: 3, name: 'Family Reunion', photos: ['photo4.jpg', 'photo5.jpg', 'photo6.jpg'] },

    ];

    return (
        <div className="dashboard">
            <h2>Просмотренные фотографии</h2>
            <div className="photo-preview-container">
                {foldersData[0].photos.slice(0, 3).map((photo, index) => (
                    <div className="photo-preview recent-photo" key={index}>
                        <img src={`/images/${foldersData[0].name}/${photo}`} alt="" />
                    </div>
                ))}
            </div>

            <h2>Открытые каталоги</h2>
            <div className="folder-container">
                {foldersData.map((folder) => (
                    <div className="folder" key={folder.id}>
                        <h3>{folder.name}</h3>
                        <div className="folder-photos">
                            {folder.photos.map((photo, index) => (
                                <img key={index} src={`/images/${folder.name}/${photo}`} alt={photo} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="dashboard-links">
                <Link to="/gallery">View Gallery</Link>
                <Link to="/add-photo">Add Photo</Link>
                <Link to="/manage-albums">Manage Albums</Link>
            </div>
        </div>
    );
};

export default Dashboard;