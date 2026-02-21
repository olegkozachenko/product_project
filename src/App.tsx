import './App.css'
// import './reset.css'

function App() {

  return (
    <>
    <main>
      <section className='main'>
        <header>
          <div className="title">
            treine.me
          </div>
          <nav className='nav'>
            <ul className='nav__links'>
              <li><a href="#!">Home</a></li>
              <li><a href="#!">About</a></li>
              <li><a href="#!">Training</a></li>
            </ul>
          </nav>
        </header>
        <div className="info">
          <div className="text">
            <h1>
              WORKOUTS MADE <span>EXCLUSIVE</span> FOR YOU!
            </h1>
            <p>
              We create <span>exclusive and unique workouts</span> for you.
              Invest in your body and <span>get much more performance</span>
              and quality of life.
            </p>
            <button><img src="src/assets/path4.svg" alt="" />Start now</button>
          </div>
          <div className="picture">
            <img src="src/assets/fitness-jump.svg" alt="" />
          </div>
        </div>
        <div className="contacts">
          send us a message  <span><a href=""> @treine.me</a></span>
        </div>
      </section>
    </main>
      
    </>
  )
}

export default App
