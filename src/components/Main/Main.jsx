import styles from "./Main.module.scss";
import screen from "../../assets/second-screen__caterories.png"
export const Main = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.bgimg}></div>
        <div className={styles.main_title_btn}>
          <h1>Долго, дорого, богато!</h1>
          <button>Каталог Изделий</button>
        </div>
      </div>
      <div className={styles.content_main}>
        <div className={styles.main_title}>
          <h2>К мероприятиям</h2>
          <h3>Настоящая красота здесь!</h3>
        </div>
        <div className={styles.main_content_btn}> 
          <button>Свадьба</button>
          <button>МУЖУ</button>
          <button>жене</button>
          <button>партнеру</button>
          <button>коллекции</button>
          <button>редкость</button>
        </div>
          <img src = {screen}/>
        </div>
    </>
  );
};
