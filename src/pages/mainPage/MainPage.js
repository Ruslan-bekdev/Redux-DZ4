import {useDispatch, useSelector} from "react-redux";
import {changeTitleAwait} from "../../redux/actions";
import {useState} from "react";

const MainPage = () => {
  const [time,setTime] = useState(3);
  const dispatch = useDispatch();
  const title = useSelector(store => store.titleReducer.title);
  const changeTitle = () => {
    dispatch(changeTitleAwait(time));
  }

  const changeTime = (e) => {
    setTime(e.target.value);
  }

  return(
    <>
      <h1>{title}</h1>
      <input value={time} onChange={changeTime} onKeyPress={e=>e.preventDefault()} type="number"/>
      <button onClick={changeTitle}>change title after {time}s</button>
    </>
  )
}

export default MainPage;