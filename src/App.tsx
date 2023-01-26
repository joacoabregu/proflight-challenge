/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import LeftButton from './assets/btn-left.png';
import RightButton from './assets/btn-right.png';
import Logo from './assets/Logo.png';
import styles from './assets/styles';

function App() {
  const [idSelected, setIdSelected] = useState<number>(1);

  function handleButton(type: 'left' | 'right') {
    if (type === 'right') {
      setIdSelected((prevState) => (prevState >= 3 ? 1 : prevState + 1));
    } else {
      setIdSelected((prevState) => (prevState <= 1 ? 3 : prevState - 1));
    }
  }

  return (
    <div className='App' css={styles.container}>
      <img
        src={LeftButton}
        onClick={() => handleButton('left')}
        css={styles.btnStyle}
      />
      <img src={Logo} css={styles.imageStyle(idSelected === 1)} />
      <img src={Logo} css={styles.imageStyle(idSelected === 2)} />
      <img src={Logo} css={styles.imageStyle(idSelected === 3)} />
      <img
        src={RightButton}
        onClick={() => handleButton('right')}
        css={styles.btnStyle}
      />
    </div>
  );
}

export default App;
