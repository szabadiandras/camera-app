import './App.css';
import Container from '../src/components/container'
import Camera from './components/camera';
import config from './config'

function App() {
  return (
    <div className="App">
      <div className="body">
        <p>Complex Object Editor</p>
          <div className='flex-row'>
            {config.cameras.map((camera) => {
              return <Container key={camera.id}>
                <Camera config={camera} />
              </Container>
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
