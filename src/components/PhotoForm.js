import React, { useState } from 'react';

const PhotoForm = () => {
    const [categorizationCriteria, setCategorizationCriteria] = useState('');
    const [customCriteria, setCustomCriteria] = useState('');
    const [showCustomCriteriaModal, setShowCustomCriteriaModal] = useState(false);

    const [tag, setTag] = useState('');
    const [tags, setTags] = useState([]);

    const handleCriteriaChange = (e) => {
        const selectedCriteria = e.target.value;
        if (selectedCriteria === 'custom') {
            setShowCustomCriteriaModal(true);
        } else {
            setCategorizationCriteria(selectedCriteria);
            setCustomCriteria('');
        }
    };

    const handleCustomCriteriaSubmit = (e) => {
        e.preventDefault();
        setCategorizationCriteria(customCriteria);
        setShowCustomCriteriaModal(false);
    };

    const handleTagChange = (e) => {
        setTag(e.target.value);
    };

    const handleTagSubmit = (e) => {
        e.preventDefault();
        setTags([...tags, tag]);
        setTag('');
    };

    return (
        <div className="photo-form">
            <h2>Загрузка фотографий</h2>
            <form>
                <label htmlFor="categorizationCriteria">Критерий каталогизации:</label>
                <select id="categorizationCriteria" value={categorizationCriteria} onChange={handleCriteriaChange}>
                    <option value="date">Дата</option>
                    <option value="location">Место</option>
                    <option value="person">Человек</option>
                    <option value="custom">Пользовательский</option>
                </select>

                {showCustomCriteriaModal && (
                    <div className="custom-criteria-modal">
                        <label htmlFor="customCriteria">Пользовательский:</label>
                        <input
                            type="text"
                            id="customCriteria"
                            value={customCriteria}
                            onChange={(e) => setCustomCriteria(e.target.value)}
                        />
                        <button type="submit" onClick={handleCustomCriteriaSubmit}>Submit</button>
                    </div>
                )}

                {/* Поле для ввода тега */}
                <label htmlFor="tag">Тег:</label>
                <input
                    type="text"
                    id="tag"
                    value={tag}
                    onChange={handleTagChange}
                />

                {/* Отображение добавленных тегов */}
                <div className="tags-container">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>

                {/* Другие поля формы и кнопка отправки */}
                <button type="submit" onClick={handleTagSubmit}>Добавить</button>
            </form>
        </div>
    );
};

export default PhotoForm;