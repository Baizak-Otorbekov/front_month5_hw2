import React, { useState, useEffect } from 'react';

const NameList = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names'));
    if (storedNames) {
      setNames(storedNames);
    }
  }, []);

  const addName = (name) => {
    const updatedNames = [...names, name];
    setNames(updatedNames);
    localStorage.setItem('names', JSON.stringify(updatedNames));
  };

  const deleteName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);
    localStorage.setItem('names', JSON.stringify(updatedNames));
  };

  return (
    <div>
      <h2>Список имен</h2>
      <div>
        <input
          type="text"
          placeholder="Введите имя"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addName(e.target.value);
              e.target.value = '';
            }
          }}
        />
        <button onClick={() => addName(document.querySelector('input').value)}>добавить</button>
      </div>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name}
            <button onClick={() => deleteName(index)}>удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
