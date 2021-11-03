const SimpleInput = (props) => {
  const submitForm = (event) => {
    event.preventDefault();
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');

    console.log(nameElement.value);
    console.log(emailElement.value);
  };
  return (
    <form onSubmit={submitForm}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
