import logo from './logo.svg'
import './App.css'

function App() {

  const operating = ['Android', 'blackberry', 'iphone', 'Windows Phone']
  const manufactures = ['Samsung', 'HTC', 'Micromax', 'Apple']


  return (
    <div className="App">

      <h1>Mobile Operating Systems</h1>
      {operating.map((e) => {
        return <ul>
          <ul>{e}</ul>
        </ul>
      })}

      <h1>Mobile Manufactures</h1>
      {manufactures.map((e) => {
        return <ul>
          <ul>{e}</ul>
        </ul>
      })}
    </div>
  )
}

export default App;







//        Other Method
{/* <div>
  <h1>Mobile Operating System</h1>
  {operating.map((e) => (
    operating(e)
  
  ))}
  <h1>Mobile Manufactures</h1>
  {manufactures.map((e) => (
    company(e)
  ))}
</div> */}



// function operating(e) {
//   return (
//     <ul>
//       <li>{e}</li>
//     </ul>
//   )
// }
// function company(e) {
//   return (
//     <ul>
//       <li>{e}</li>
//     </ul>
//   )
// }
