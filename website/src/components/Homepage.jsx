import React from 'react';
import './homepage.css';
import './utility.css';
import './homepage.js';

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
            <h3>
              Your Library
            </h3>
            <i class="fa-solid fa-plus"></i>
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
            <button>Sign up</button>
            <button>Log in</button>
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
              <h4>Dinner with Friends</h4>
              <p>The perfect soundtrack to those long nights over...</p>
            </div>

            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f00000002a98e80d2fc9b1cf3b80c4481" alt="" />
              <h4>Dinner Jazz</h4>
              <p>The gentle sound of some of the greatest voice an...</p>
            </div>

            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000027cd703bbfec2f1e86c879bec" alt="" />
              <h4>Dinner Lounge</h4>
              <p>Soft electronis music for your dinner.</p>
            </div>

            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f000000022ba865eb4204be02ce3e8e09" alt="" />
              <h4>Feel Good Dinner</h4>
              <p>An uplifting yet tasteful dinner playlist with a...</p>
            </div>

            <div className="card">
              <div className="play">
                <i class="fa-solid fa-play"></i>
              </div>
              <img src="https://i.scdn.co/image/ab67706f00000002dd9acb211caf8703ea9bfc98" alt="" />
              <h4>Bossa Nova Dinner</h4>
              <p>Soundtrack your cozy dinner with bossa nova...</p>
            </div>

          </div>

          <div className="playbar">
            <div className="songinfo">

            </div>
            <div className="songbuttons">
              <i class="fa-solid fa-backward-step"></i>
              <i class="fa-regular fa-circle-play"></i>
              <i class="fa-solid fa-forward-step"></i>
            </div>
            <div className="songtime">

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Homepage