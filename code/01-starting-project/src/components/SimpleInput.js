import React, {useState} from 'react';

const SimpleInput = (props) => {
  const [nameInput, setNameInput] = useState('');
  const [nameIsShort, setNameIsShort] = useState(true);
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
  };

  const nameOnBlur = (e) => {
    e.preventDefault();
    setNameIsTouched(true);
    if (nameInput.length > 2) {
      setNameIsShort(false);
    } else {
      setNameIsShort(true);
    }
  };
  return (
    <form onSubmit={submitForm}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          onBlur={nameOnBlur}
          type='text'
          id='name'
        />
        {nameIsShort && nameIsTouched && (
          <p style={{color: 'red'}}>Name cannot be empty</p>
        )}
      </div>
      <div className='form-actions'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
