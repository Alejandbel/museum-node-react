import React from 'react';

function HomePage() {
  return (
    <div className="about-company">
      <img
        className="museum-logo"
        src="https://media.museumsassociation.org/app/uploads/2023/07/21123205/nhm-rebrand-16x9-1.jpg"
        height="200"
        alt="museum logo"
      />

      <section id="video">
        <video muted autoPlay loop>
          <source
            src={`${process.env.PUBLIC_URL}/structure.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag
        </video>
      </section>

      <section id="history" className="block">
        <h2>History</h2>
        <details>
          <summary>2021 - Museum site opening</summary>
          <p>
            In 2021, a new museum site unveiled its doors in our city.
            It seamlessly integrates tradition and modernity,
            housing captivating exhibits spanning ancient relics to contemporary art.
            With inclusivity in mind, this
            museum site offered virtual tours for global accessibility.
            Through a series of engaging events and
            workshops, it transformed into a beacon of hope, uniting people through art and history.
          </p>
          <p>
            As it forges ahead, this museum site continues
            to enrich lives, underscoring the enduring influence of
            culture in challenging times. It stands as a testament to
            the power of creativity and history to bring
            people together, offering a glimpse into
            our shared human experience and a source of inspiration for
            years to come.
          </p>
        </details>
        <details>
          <summary>2022 - Fall before takeoff</summary>
          <p>
            However, the museum site faced its
            own challenges in the turbulent year of 2022. The global landscape
            was marred by uncertainty and difficulties,
            affecting the cultural sector as well. The site had to adapt
            to changing circumstances, implementing safety
            measures and virtual experiences to ensure the
            well-being of its visitors. Despite these challenges,
            it remained a resilient symbol of hope, reminding us that art
            and history endure, providing solace and inspiration even during the toughest times.
          </p>
        </details>
        <details>
          <summary>2023 - Year of rise</summary>
          <p>
            Fast-forward to 2023, the museum site has
            not only weathered the storm but has also emerged stronger  and
            more resilient. With renewed enthusiasm and innovative strategies,
            it celebrated a year of success and
            growth. Visitors from far and wide flocked to its exhibits,
            both in person and virtually, eager to
            explore the rich tapestry of human creativity and history it offered.
          </p>
          <p>
            In 2023, the museum site expanded its collection, adding rare artifacts
            and thought-provoking installations that captivated the imagination
            of all who visited. It continued to be a hub of cultural
            exchange, hosting international exhibitions that
            fostered cross-cultural understanding and appreciation.
          </p>
        </details>
      </section>

      <section className="certificate-container ">
        <div className="gradient-overlay">
          <h2 className="certificate-title">Museum Certificate of Accreditation</h2>
          <h3 className="recipient-name">Museum App</h3>
          <p className="certificate-date">
            <time className="2021-07-07">July 7</time>
          </p>
        </div>
      </section>

      <section id="contact" className="block">
        <h2>Contact us</h2>
        <p>If you have any questions or inquiries, please do not hesitate to get in touch with us.
          You can reach us via
          email at <a href="mailto:bogdanov28c@gmail.com">bogdanov28c@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
