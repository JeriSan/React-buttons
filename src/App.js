import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//BOTONES QUE SE ACTUALIZAN A LA VEZ
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Contadores que se actualizan juntos</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Hiciste clic {count} veces
    </button>
  );
}

//CONTADORES QUE SE ACTUALIZAN POR SEPARADO

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Contadores que se actualizan separadamente</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Hiciste clic {count} veces
//     </button>
//   );
// }
