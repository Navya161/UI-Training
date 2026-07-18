// import { useState, useEffect } from "react";

// export default function Mount() {
//   const [student1, setstudent1] = useState(0);
//   useEffect(()=>{
//     console.log("write Exam");
//   },[]);
//   return (
//     <div>
//       {/* <h1>Student 1</h1> */}
//       <p>Status : Student came to class, present Class : {student1}</p>
//       <button onClick={() => setstudent1(student1 + 1)}>Update Status</button>
//       <br />
//       <button onClick={() => setstudent1("Went Home")}>Go Home</button>
//     </div>
//   );
// }
import { useState } from "react";

export default function CatFact(params) {
  const [fact, setFact] = useState("");
  const URL = "https://catfact.ninja/fact";

  async function getData() {
    let data = await fetch(URL);
    let final_data = await data.json();
    setFact(final_data.fact);
  }
  return (
    <div>
      <h1>Cat Facts</h1>
      <p>Fact : {fact}</p>
      <button onClick={getData}>Get Fact</button>
    </div>
  );
}
