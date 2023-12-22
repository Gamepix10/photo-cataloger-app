import React, { useState } from 'react';

const ManageAlbum = () => {
    // Используем состояние для хранения данных о каталогах и фотографиях
    const [albums, setAlbums] = useState([
        { id: 1, name: 'Vacation 2022', photos: ['photo1.jpg', 'photo2.jpg'] },
        { id: 2, name: 'Family Reunion', photos: ['photo3.jpg', 'photo4.jpg'] },
        // Добавьте другие каталоги с фотографиями, если необходимо
    ]);

    // Метод для добавления нового каталога
    const addAlbum = (name) => {
        setAlbums([...albums, { id: Date.now(), name, photos: [] }]);
    };

    // Метод для изменения имени каталога
    const editAlbum = (id, newName) => {
        setAlbums(albums.map((album) => (album.id === id ? { ...album, name: newName } : album)));
    };

    // Метод для удаления каталога
    const deleteAlbum = (id) => {
        setAlbums(albums.filter((album) => album.id !== id));
    };

    // Метод для добавления новой фотографии в каталог
    const addPhoto = (albumId, photoName) => {
        setAlbums(albums.map((album) => (album.id === albumId ? { ...album, photos: [...album.photos, photoName] } : album)));
    };

    // Метод для удаления фотографии из каталога
    const deletePhoto = (albumId, photoName) => {
        setAlbums(albums.map((album) => (album.id === albumId ? { ...album, photos: album.photos.filter((photo) => photo !== photoName) } : album)));
    };

    return (
        <div className="manage-album">
            <h2>Управление каталогами</h2>
            {/* Форма для добавления нового каталога */}
            <form onSubmit={(e) => { e.preventDefault(); addAlbum(e.target.elements.albumName.value); }}>
                <label htmlFor="albumName">Новый альбом:</label>
                <input type="text" id="albumName" />
                <button type="submit">Добавить каталог</button>
            </form>

            {/* Список каталогов с возможностью редактирования и удаления */}
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        <span>{album.name}</span>
                        {/* Форма для добавления новой фотографии */}
                        <form onSubmit={(e) => { e.preventDefault(); addPhoto(album.id, e.target.elements.photoName.value); }}>
                            <input type="text" placeholder="New Photo" name="photoName" />
                            <button type="submit">Добавить фото</button>
                        </form>
                        {/* Список фотографий с возможностью удаления */}
                        <ul>
                            {album.photos.map((photo) => (
                                <li key={photo}>
                                    <span>{photo}</span>
                                    <button onClick={() => deletePhoto(album.id, photo)}>Удалить</button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => { const newName = prompt('Enter a new name:', album.name); if (newName) editAlbum(album.id, newName); }}>
                            Изменить
                        </button>
                        <button onClick={() => deleteAlbum(album.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageAlbum;