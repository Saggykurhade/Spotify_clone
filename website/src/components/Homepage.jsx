import React from 'react';
import './homepage.css';
import './utility.css';

const Homepage = () => {
  return (
    <div className='container flex bg-black'>

      <div className='left'>
        <div className="home bg-grey rounded m-1 p-1">
          <div className='logo'><img className='invert' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWP2HkuDVbWVFf-uvJbGxTNMz0TEhCcAGy1w&usqp=CAU" alt="logo" /></div>
          <ul>
            <li className='icons'><i class="fa-solid fa-house"></i>Home</li>
            <li className='icons'><i class="fa-solid fa-magnifying-glass"></i>Search</li>
          </ul>
        </div>

        <div className="library bg-grey rounded m-1 p-1">
          <div className="heading">
            <i class="fa-solid fa-play"></i>
            <img src="library.svg" alt="" />
            <h3>
              your library
            </h3>
          </div>

          <div className="footer">
            <div><span>Legal</span></div>
            <div><span>Privacy Center</span></div>
            <div><span>Privacy Policy</span></div>
            <div><span>Cookies</span></div>
            <div><span>About Ads</span></div>
            <div><span>Accessibility</span></div>
          </div>
        </div>

      </div>

      <div className='right bg-grey rounded'>
        <div className="header">
          <div className="nav">
            <i class="fa-solid fa-chevron-left"></i>
            <i class="fa-solid fa-chevron-right"></i>
          </div>
          <div className="buttons">
            <button>Signup</button>
            <button>Login</button>
          </div>
        </div>

        <div className="spotifyplaylists">
          <h2>Spotify Playlists</h2>
          <div className="cardcontainer">
            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de" alt="" />
              <h3>Happy Hits!</h3>
              <p>Hits to boost your mood and fill you with happiness!</p>
            </div>
            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de" alt="" />
              <h3>Happy Hits!</h3>
              <p>Hits to boost your mood and fill you with happiness!</p>
            </div>
            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de" alt="" />
              <h3>Happy Hits!</h3>
              <p>Hits to boost your mood and fill you with happiness!</p>
            </div>
            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de" alt="" />
              <h3>Happy Hits!</h3>
              <p>Hits to boost your mood and fill you with happiness!</p>
            </div>
            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000026e515187c071e45918e9f0de" alt="" />
              <h3>Happy Hits!</h3>
              <p>Hits to boost your mood and fill you with happiness!</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage