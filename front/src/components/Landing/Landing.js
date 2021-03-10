import React from "react";

function Landing(props) {
  return (
    <div>
      <section id="banner" class="style2">
        <div class="inner">
          <span class="image">
            <img src="images/pic07.jpg" alt="" />
          </span>
          <header class="major">
            <h1>Landing</h1>
          </header>
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet nullam consequat
              <br />
              sed veroeros. tempus adipiscing nulla.
            </p>
          </div>
        </div>
      </section>

      <div id="main">
        <section id="one">
          <div class="inner">
            <header class="major">
              <h2>Sed amet aliquam</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
              urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Nullam et orci eu lorem consequat tincidunt vivamus et
              sagittis magna sed nunc rhoncus condimentum sem. In efficitur
              ligula tate urna.
            </p>
          </div>
        </section>

        <section id="two" class="spotlights">
          <section>
            <a href="generic.html" class="image">
              <img
                src="images/pic08.jpg"
                alt=""
                data-position="center center"
              />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Orci maecenas</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="generic.html" class="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="generic.html" class="image">
              <img src="images/pic09.jpg" alt="" data-position="top center" />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Rhoncus magna</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="generic.html" class="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <a href="generic.html" class="image">
              <img src="images/pic10.jpg" alt="" data-position="25% 25%" />
            </a>
            <div class="content">
              <div class="inner">
                <header class="major">
                  <h3>Sed nunc ligula</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <ul class="actions">
                  <li>
                    <a href="generic.html" class="button">
                      Learn more
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section id="three">
          <div class="inner">
            <header class="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul class="actions">
              <li>
                <a href="generic.html" class="button next">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;