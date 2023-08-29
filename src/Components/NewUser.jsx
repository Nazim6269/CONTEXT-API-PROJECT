// import React, { useState } from "react";

// const NewUser = ({ addData }) => {
//   const [username, setUsername] = useState("");

//   const handleChange = (e) => {
//     e.preventDefault();
//     setUsername(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newUser = {
//       id: new Date().getTime().toString(),
//       name: username,
//     };
//     addData(newUser);
//     setUsername("");
//   };

//   return (
//     <div>
//       <h2> Save Your Info</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name=""
//           id=""
//           value={username}
//           onChange={handleChange}
//         />
//         <button type="submit">Add User</button>
//       </form>
//     </div>
//   );
// };

// export default NewUser;
