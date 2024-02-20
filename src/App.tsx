import ColorBox from './components/colorBox/colorBox'
import Options from './components/options/options'
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.colorSelector}>
      <ColorBox />
      <Options />
    </div>
  )

}

export default App
