import React, { useState } from 'react';
import './../styles/App.css';

const App = () => {
  const [fields, setFields] = useState([{ id: 1, name: "", age: "" }]);
  const [nextId, setNextId] = useState(2);

  const handleAddField = () => {
    setFields([...fields, { id: nextId, name: "", age: "" }]);
    setNextId(nextId + 1);
  };

  const handleRemoveField = (id) => {
    if (fields.length > 1) {
      setFields(fields.filter(field => field.id !== id));
    }
  };

  const handleInputChange = (id, fieldName, value) => {
    setFields(fields.map(field => 
      field.id === id ? { ...field, [fieldName]: value } : field
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = fields.map(({ name, age }) => ({ name, age }));
    console.log(formData);
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <h2>Dynamic Fields Form</h2>

        {fields.map((field) => (
          <div key={field.id} className='field-group'>
            <div className='input-group'>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={field.name}
                  onChange={(e) => handleInputChange(field.id, "name", e.target.value)}
                  placeholder='Enter name'
                />
              </div>

              <div>
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={field.age}
                  onChange={(e) => handleInputChange(field.id, "age", e.target.value)}
                  placeholder='Enter age'
                />
              </div>
            </div>

            {fields.length > 1 && (
              <button
                type="button"
                className='remove-btn'
                onClick={() => handleRemoveField(field.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <div className='button-group'>
          <button type="button" onClick={handleAddField}>
            Add Field
          </button>
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;