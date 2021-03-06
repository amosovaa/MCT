import React from 'react';

function Section(props) {
  return (
    <div>
      <section id='one' className='tiles'>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Aliquam</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Tempus</h3>
            <p>feugiat amet tempus</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Magna</h3>
            <p>Lorem etiam nullam</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Ipsum</h3>
            <p>Nisl sed aliquam</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Consequat</h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>Etiam</h3>
            <p>Feugiat amet tempus</p>
          </header>
        </article>
      </section>
    </div>
  );
}

export default Section;
