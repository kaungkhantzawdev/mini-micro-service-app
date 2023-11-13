import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="">
                {/* post create  */}
                <PostCreate />

                {/* post list  */}
                <PostList />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
