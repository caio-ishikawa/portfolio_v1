import  * as THREE from 'three'
import {Canvas, useFrame, useLoader} from 'react-three-fiber'
import circleImg from '../assets/circle.png'
import { Suspense, useCallback, useMemo, useRef } from 'react';
import Points from '../components/Points'

function AnimationCanvas() {
    return(
      <Canvas colorManagement={false} camera={{position: [100, 10, 0], fov: 75}} className="animcanvas">
        <Points/>
      </Canvas>
    )
  
  }

  export default AnimationCanvas