import { useRef, useState } from 'react';
import './App.css';
import ImageGrallery from './ImageGrallery';

//https://github.com/Shin-sibainu/my-pixabay-with-react/tree/main/src

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    //APIを叩く(データフェッチ)
    //API URL
    const endpointUrl = `https://pixabay.com/api/?key=31621166-d69c50502e9ef7b3bd158230b&q=${ref.current.value}&image_type=photo&pretty=true`;
    fetch(endpointUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data.hits);
        setFetchData(data.hits);
      });
  }

  return (
    <div className="container">
      <h2>PixaBay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を探す" ref={ref} />
      </form>
      <ImageGrallery fetchData={fetchData}/>
    </div>
  );
}

export default App;
