import './App.css'
import PostList from './components/PostList.jsx'
import Header from './components/Header.jsx'
import { useState } from 'react';

function App() {

   const [modalIsVisible, setModalIsVisible] = useState(false);

   function hideModalHandler(){
        setModalIsVisible(false);
    }

    function showModalHandler(){
        setModalIsVisible(true);
    }   

  return (
    <>
      <Header onCreatePost={showModalHandler}/>
      <main>
            <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </main>
    </>
  )
}

export default App
