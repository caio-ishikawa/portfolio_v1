import './App.css';
import  * as THREE from 'three'
import {Canvas, useFrame, useLoader} from 'react-three-fiber'
import circleImg from './assets/circle.png'
import { Suspense, useCallback, useMemo, useRef } from 'react';
import AnimationCanvas from './components/AnimationCanvas'
import NavBar from './components/NavBar'
import Hero from './components/Hero';


function App() {
  return (
    <div>
      <div className="anim">
        <Suspense fallback={null}>
          <AnimationCanvas/>
        </Suspense>
      </div>
      <div>
        <Hero/>
      </div>
      {/* <div clasName="navdiv">
        <NavBar/>
      </div>
      <div>
        <p className="header">test</p>
      </div> */}
    </div>
  );
}

export default App;
