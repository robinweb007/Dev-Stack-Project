
import { Suspense } from 'react';
import './App.css'
import { Banner } from './banner';
import { Nav } from './nav';
import Technologies from './technologies'
import type { Itype } from './type';




const technologiefetech =async():Promise<Itype []>=>{
    const res = await fetch('./info.json');
    const data =await res.json();
    return data;
  }
function App() {
const technologiePormise =technologiefetech()
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback={<p>Loading..</p>}>
        <Technologies technologiePormise={technologiePormise}></Technologies>
      </Suspense>
    </>
  );
}

export default App
