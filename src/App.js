
import {Simpsons} from "./simpsons/Simpsons";
import {RickMorty} from "./rick&morty/Rick&Morty";


function App() {

  return (
      <div>
        {/* Завдання 1 */}
        {/* <Simpsons name={'Homer Simpson'} gender={'Male'} age={27} link={'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534'}/>*/}
        {/* <Simpsons name={'Bart Simpson'} gender={'Male'} age={10} link={'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}/>*/}
        {/* <Simpsons name={'Marge Simpson'} gender={'Female'} age={34} link={'https://images.immediate.co.uk/production/volatile/sites/3/2016/03/Simpsons_g2013_R1_marge-04bf0d1.jpg?quality=90&crop=3px,170px,1884px,1255px&resize=980,654'}/>*/}
        {/* <Simpsons name={'Lisa Simpson'} gender={'Female'} age={8} link={'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/170px-Lisasmiling.png'}/>*/}
        {/* <Simpsons name={'Maggie Simpson'} gender={'Female'} age={1} link={'https://upload.wikimedia.org/wikipedia/uk/thumb/9/9d/Maggie_Simpson.png/220px-Maggie_Simpson.png'}/>*/}
        {/* Завдання 2 */}
          <RickMorty id={1} name={'Rick Sanchez'} species={'Human'} gender={'Male'} img={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
          <RickMorty id={2} name={'Morty Smith'} species={'Human'} gender={'Male'} img={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
          <RickMorty id={3} name={'Summer Smith'} species={'Human'} gender={'Female'} img={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
          <RickMorty id={4} name={'Beth Smith'} species={'Human'} gender={'Female'} img={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
          <RickMorty id={5} name={'Jerry Smith'} species={'Human'} gender={'Male'} img={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
          <RickMorty id={6} name={'Abadango Cluster Princess'} species={'Alien'} gender={'Female'} img={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
      </div>
  );
}

export default App;