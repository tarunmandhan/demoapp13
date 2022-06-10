import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";

// array map function mien 3 parameter hote h ( 1. value , 2. index no. kya h , 
//    3. array name useful for if have mutiple array )


// function netflixcard(val){
//    return(
//       <Card 
//       imgsrc={val.imgsrc}
//       tittle={val.tittle}
//       sname= {val.sname}
//       href=  {val.href}
//    />
//       )
//    }


// function App(){
//     return(
//         <>
//          <h1 className="heading_style"> Top 5 NETFLIX Series </h1>

//         { Sdata.map(netflixcard)};
         
//       </>
//     )
// };





// upper wale code mien 2 alag function h
// same h bus inline function bana rhe h
// function App(){
//    return(
//       <>
//          <h1 className="heading_style"> Top 5 NETFLIX Series </h1>

//         { Sdata.map(
//             function netflixcard(val){
//                return(
//                <Card 
//                imgsrc={val.imgsrc}
//                tittle={val.tittle}
//                sname= {val.sname}
//                href=  {val.href}
//                />
//                )
//             }
//          )
//          };   
//       </>
//    )
// };

// fat arrow function 
// function myname(tarun){
// <p>normal tarika function define karne ka </p>
// }
// const myname = (tarun) => {
//    <p> after ES6 using fat arrow function </p>
// }

// if single return value so write in single line like 
// const myname = (a,b) => a+b;

function App(){
   return(
      <>
         <h1 className="heading_style"> Top 5 NETFLIX Series </h1>

        { Sdata.map((val,index) =>  {
            return(
               <Card 
               key={val.id}
               imgsrc={val.imgsrc}
               tittle={val.tittle}
               sname= {val.sname}
               href=  {val.href}
               />
               )
            }
         )
         };   
      </>
   )
};

export default App;