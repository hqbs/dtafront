import React from 'react'
import Image1 from '../../../images/about1.svg'
import Image2 from '../../../images/about2.svg'
import Image3 from '../../../images/about3.svg'
import Image4 from '../../../images/about4.svg'
import Image5 from '../../../images/about5.svg'
import Image6 from '../../../images/about6.svg'
import Image7 from '../../../images/about7.svg'

function landing () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  return (
    <div>
      <div className='create-container-about' style={{ height: 0 }}>
        <h2> </h2>
        <p></p>
      </div>
      <center>
        <h1 style={{ fontSize: '48px' }}>About</h1>
      </center>
      <div className='container-about' style={{ top: '200px' }}>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image1}
              width='40%'
            />
          </center>
        </div>
        <div className='create-container-about'>
          <h2>Inspiration</h2>
          <p>
            What inspired us the most was the experiences and observations we
            had made as our school moved all our classes online. There is SO
            much technology out there and it can be hard on those who may not be
            technically inclined. With that being said, we wanted to create
            something that is simple to use and makes online learning a better
            experience for everyone.
          </p>
        </div>
      </div>
      <div className='container-about'>
        <div className='create-container-about'>
          <h2>What it does</h2>
          <p>
            AcademeSpace creates a fully automated classroom setting through a
            Discord Bot and our web interface. It allows professors to setup a
            discord server within seconds of signing up by running one simple
            command. Once they have a classroom, they can invite students
            through a class code.
          </p>
          <p>
            Communication can happen in realtime using discord through text and
            voice. The web interface acts as a portal for our tools provided for
            professors and teaching assistants. Some key features are automated
            groups, facilitated office hours through automated queues, and much
            more.
          </p>
        </div>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image2}
              width='70%'
            />
          </center>
        </div>
      </div>
      <div className='container-about'>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image3}
              width='40%'
            />
          </center>
        </div>
        <div className='create-container-about'>
          <h2>How we built it</h2>
          <p>
            Discord Bot: Discord.js + NodeJS (for some endpoints) Frontend:
            React Backend: GoLang, Couchbase, GraphQL
          </p>
        </div>
      </div>
      <div className='container-about'>
        <div className='create-container-about'>
          <h2>Challenges we ran into</h2>
          <p>
            One challenge we ran into was with using the Discord.js library for
            our Discord Bot. We tried using the newest version, but
            documentation was pretty bare and hardly readable, so we had to
            downgrade it a couple times to make our lives much easier, but still
            function the same.
          </p>
        </div>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image4}
              width='60%'
            />
          </center>
        </div>
      </div>
      <div className='container-about'>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image5}
              width='45%'
            />
          </center>
        </div>
        <div className='create-container-about'>
          <h2>Accomplishments that we are proud of</h2>
          <p>
            Our biggest accomplishment was seeing it all come together. We were
            happy to have 4 servers up and running, in a somewhat micro-servicey
            fashion. JWT Tokens are also tough, so it was really awesome to see
            our authentication come together really nicely. We also didn't use
            any design library like bootstrap! That was a personal goal for me
            (Brandon).
          </p>
        </div>
      </div>
      <div className='container-about'>
        <div className='create-container-about'>
          <h2>What we learned</h2>
          <p>
            For the backend, learning how to do JWT tokens for authentication
            took some time, especially in GoLang. For the Frontend, the biggest
            thing was not using any sort of design library. So, learning to
            design things from scratch really tested what we knew.
          </p>
        </div>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image6}
              width='50%'
            />
          </center>
        </div>
      </div>
      <div className='container-about'>
        <div className='create-container-image'>
          <center>
            <img
              alt='lady standing up with other peeps in bubbles'
              src={Image7}
              width='50%'
            />
          </center>
        </div>
        <div className='create-container-about'>
          <h2>What's next for AcademeSpace</h2>
          <p>
            The next step for us is adding more features! We want this to be a
            really useful tool which makes online learning very fluid and easy
            to setup. We would also like to add additional support for things
            like Slack and maybe even our own in-house communication platform.
            Lastly, we want to get this in the hands of teachers and see how it
            does!
          </p>
        </div>
      </div>
    </div>
  )
}

export default landing
