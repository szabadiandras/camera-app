import { useState, useEffect } from 'react';
import CameraIcon from '../img/videocam_black_24dp.svg'

function Camera(props) {
  const { config } = props;

  const [configuration, setConfiguration] = useState({
    colors: {
      main: '',
      border: ''
    },
    direction: 0,
    active: false,
    createdAt: ''
  });

  useEffect(() => {
    setConfiguration(config);
  }, [config]);

  return (
    <div className='flex-column'>
      <div
        className='camera-wrapper'
        style={{
          backgroundColor: configuration.colors.main,
          border: `5px solid ${configuration.colors.border}`,
          opacity: configuration.active ? '100%' : '50%'
        }}
      >
        <img
          src={CameraIcon}
          alt='Camera'
          className='camera'
          style={{ transform: `rotate(${configuration.direction}deg)` }}
        />
      </div>
      <form className='flex-column wrapper'>
        <div className='flex-row'>
          <label>
            Main color:
            <input
              type='color'
              className='color-picker'
              value={configuration.colors.main}
              onChange={e => {
                setConfiguration({
                  ...configuration,
                  colors: {
                    main: e.target.value
                  }
                });
              }}
            />
          </label>
          <label>
            Border color:
            <input
              type='color'
              className='color-picker'
              value={configuration.colors.border}
              onChange={e => {
                setConfiguration({
                  ...configuration,
                  colors: {
                    border: e.target.value
                  }
                });
              }}
            />
          </label>
        </div>
        <label>
          Direction:
          <input
            type='number'
            value={configuration.direction}
            onChange={e => {
              setConfiguration({
                ...configuration,
                direction: e.target.value
              });
            }}
          />
        </label>
        <label>
          Added:
          <input
            type='datetime-local'
            value={configuration.createdAt}
            onChange={e => {
              setConfiguration({
                ...configuration,
                createdAt: e.target.value
              });
            }}
          />
        </label>
      </form>
      <div style={{ width: '250px' }} className='wrapper'>
        <p>{JSON.stringify(configuration, null, '\t')}</p>
      </div>
    </div>
  );
}

export default Camera;
