import './TestProps.css'
import { useRef } from "react";

function TestProps(props) {
  const Description = useRef(null)


  let Send = () => {
    props.call(Description.current.value);
    

  }


  return (
    <div className='wrap'>
      <div className='horizon'>
        <ul>
          <li>food</li>
          <li>water</li>
          <li>suplices</li>
        </ul>

        <ul>
          <li>{props.obj['food']}</li>
          <li>{props.obj['food']}</li>
          <li>{props.obj['food']}</li>
        </ul>
      </div>
      <form action=''>
        <label>ADD</label>
        <br />
        <input type="text" />
        <br />
        <label>TEXT</label>
        <br />
        <textarea ref={Description} rows='4' />
        <br />

        <button type='button' onClick={Send}>Отправить</button>


      </form>

    </div>
  );

}

export default TestProps