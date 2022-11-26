import './App.css';
import ImageGrallery from './ImageGrallery';

function App() {
  return (
    <div className="container">
      <h2>PixaBay</h2>
      <form>
        <input type="text" placeholder="画像を検索"/>
      </form>
      <ImageGrallery />
    </div>
  );
}

export default App;
