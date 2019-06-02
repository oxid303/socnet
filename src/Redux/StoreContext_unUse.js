import React from 'react';

const StoreContext = React.createContext(null);

export const Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  )
};

export default StoreContext;


// import StoreContext from '../../Redux/StoreContext';

// const Container = () => {

//   return (
//     <StoreContext.Consumer>
//       { store => {
//         let state = store.getState();

//         let motion = (some) => {
//           store.dispatch(motionCreator(some));
//         };

//         return (
//           <Component
//             state={state}
//             motion={motion} />
//         )
//       }}
//     </StoreContext.Consumer>
//   )
// }
