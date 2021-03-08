import React from 'react';

function Section(props) {
  return (
    <div>
      <section id='one' className='tiles'>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Hotel</h3>
            <p>Know more about your hotel for today</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Bus</h3>
            <p>Bus parking information</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Schedule</h3>
            <p>Be aware of the schedule</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Restaurants</h3>
            <p>Find out your place to eat</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Plan</h3>
            <p>Plan your free time in advance</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Forgotten things</h3>
            <p>Don't worry about forgotten things</p>
          </header>
        </article>
      </section>
    </div>
  );
}

export default Section;
