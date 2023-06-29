// import React, { useState } from 'react';

// const SignInForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = event => {
//     event.preventDefault();
//     // Implement your sign in logic here
//     console.log(`Username: ${username}, Password: ${password}`);
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//     }}>
//       <div style={{
//         width: '300px',
//         height: '200px',
//         padding: '20px',
//         border: '1px solid black',
//         borderRadius: '10px',
//         backgroundColor: 'lightblue',
//       }}>
//         <h1>Welcome Back</h1>
//         <h4>Sign In</h4>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={username}
//             onChange={e => setUsername(e.target.value)}
//           />
//           <br />
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//           <br />
//           <button type="submit">Sign In</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignInForm;