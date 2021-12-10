import logo from './logo.svg'
// import './App.css'
import './main.css'
import { FaGithubAlt, FaFacebook, FaTwitter } from 'react-icons/fa'

function App() {
  const LINK_IMAGE =
    'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg'

  return (
    <div className='App'>
      {/* <header className='tabname'>
        <div>about me</div>
        <div>skill</div>
      </header> */}
      <section className='about-me'>
        <div className='text'>
          <h3>Nguyen Nhat hau</h3>
          <p>several info</p>
          <ul className='list-icons'>
            <li className='icon'>
              <FaGithubAlt />
            </li>
            <li className='icon'>
              <FaFacebook />
            </li>
            <li className='icon'>
              <FaTwitter />
            </li>
          </ul>
        </div>
        <div className='avatar'>
          <img src={LINK_IMAGE} alt='Girl in a jacket' />
        </div>
      </section>
      <section className='skill'>
        <div>
          <h2>skill</h2>
          <hr />
        </div>
        <div>
          <h2>project</h2>
          <hr />
        </div>
      </section>
    </div>
  )
}

export default App
