import React, { useState } from 'react';

function AdminCabinet(props) {
  // const time = useRef();
  const [input, setInput] = useState('');
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={buttonHandler}>
        <br />
        <br />
        <br />
        <h2> Создать новый город </h2>
        <fieldset>
          <legend>Город</legend>
          <label>
            <input type='text' placeholder='Город' />
          </label>
        </fieldset>
        <fieldset>
          <legend>Отель</legend>
          <label>
            <input type='text' placeholder='Название отеля' />
          </label>
          <label>
            <input type='date' placeholder='Дата приезда' />
          </label>
          <label>
            <input
              onChange={handleInput}
              value={input}
              type='time'
              placeholder='Время приезда'
            />
          </label>
          <label>
            <input type='date' placeholder='Дата выезда' />
          </label>
          <label>
            <input type='time' placeholder='Время выезда' />
          </label>
          <label>
            <input type='text' placeholder='Адрес отеля' />
          </label>
        </fieldset>
        <fieldset>
          <legend>Концертный зал</legend>
          <label>
            <input type='text' placeholder='Адрес концертного зала' />
          </label>
          <label>
            <input type='time' placeholder='Время начала репетиции' />
          </label>
          <label>
            <input type='time' placeholder='Время конца репетиции' />
          </label>
          <label>
            <input type='time' placeholder='Время начала первого концерта' />
          </label>
          <label>
            <input type='time' placeholder='Время начала второго концерта' />
          </label>
        </fieldset>
        <fieldset>
          <legend>Еда</legend>
          <label>
            <input type='text' placeholder='Адрес еды' />
          </label>
          <label>
            <input type='time' placeholder='Время еды' />
          </label>
        </fieldset>
        <button> Создать город </button>
      </form>
    </div>
  );
}

export default AdminCabinet;
