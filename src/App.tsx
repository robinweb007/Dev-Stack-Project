
import { Suspense } from 'react';
import './App.css'
import { Banner } from './banner';
import { Nav } from './nav';
import Technologies from './technologies'
import type { Itype } from './type';
import { Footer } from './footer';
import { ToastContainer } from 'react-toastify';




const technologiefetech =async():Promise<Itype []>=>{
    const res = await fetch('./info.json');
    const data =await res.json();
    return data;
  }
function App() {
const technologiePormise =technologiefetech()
  return (
    <>
      <ToastContainer position="top-right" />


      <Nav></Nav>
      <Banner></Banner>

      <Suspense fallback={<p className='text-2xl font-bold text-center'>Loading..</p>}>
        <Technologies technologiePormise={technologiePormise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App
