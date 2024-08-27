import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import './stats.css'

const Stars = (props) => {
  const ref = useRef();

  // Generate 5000 random points within a sphere of radius 1.2
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3); // 5000 points, each with x, y, z
    random.inSphere(positions, { radius: 1.2 });
    
    // Validate positions to ensure there are no NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.error("NaN value found in positions array", positions);
        break;
      }
    }
    
    return positions;
  });  //to generate stars at random point
  

  // Rotate the points continuously
  //without this function there is no animation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}> {/* to rotate all the group */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>{/* to rotate every single star */}
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        /> {/* to declare stars proporty */}
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1] startComponment '>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;




// 

//import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// // Stars component to render the points in 3D space
// const Stars = (props) => {
//   const ref = useRef();

//   // Generate 5000 random points within a sphere of radius 1.2
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   // Rotate the points continuously
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };


// // StarsCanvas component to set up the canvas and render the Stars component
// const StarsCanvas = () => {
//     return (
//       <div className='w-full h-auto absolute inset-0 z-[-1]'>
//         <Canvas camera={{ position: [0, 0, 1] }}>
//           <Suspense fallback={null}>
//             <Stars />
//           </Suspense>
//           <Preload all />
//         </Canvas>
//       </div>
//     );
//   };
  
//   export default StarsCanvas;
  













// import { useState, useRef, Suspense } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";

// const Stars = (props) => {
//   const ref = useRef();
//   const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 10;
//     ref.current.rotation.y -= delta / 15;
//   });

//   return (
//     <group rotation={[0, 0, Math.PI / 4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.002}
//           sizeAttenuation={true}
//           depthWrite={false}
//         />
//       </Points>
//     </group>
//   );
// };

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{ position: [0, 0, 1] }}>
//         <Suspense fallback={null}>
//           <Stars />
//         </Suspense>

//         <Preload all />
//       </Canvas>
//     </div>
//   );
// };

// export default StarsCanvas;
