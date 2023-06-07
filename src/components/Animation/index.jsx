// import { Suspense, useState } from 'react'
// import '../../styles/banana.css'
// import Overlay from './layout/Overlay'
// import { FadeIn, LeftMiddle } from './layout/styles'
// import Bananas from './Bananas'
// // Comment the above and uncomment the following to import the WebGL BG lazily for faster loading times
// // const Bananas = lazy(() => import('./Bananas'))

// export default function Animation() {
//     const [speed, set] = useState(1)
//     return (
//         <>
//             {/* <Suspense fallback={null}>
//                 <Bananas speed={speed} />
//                 <FadeIn />
//             </Suspense> */}
//             <Overlay />
//             <LeftMiddle>
//                 <input type="range" min="0" max="10" value={speed} step="1" onChange={(e) => set(e.target.value)} />
//             </LeftMiddle>
//         </>
//     )
// }