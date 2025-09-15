// import React from 'react';

// function AboutPage() {

//     // userオブジェクトを定義する
//     const user = {
//       name: '田中太郎',
//       imageUrl: 'https://via.placeholder.com/150x150/4CAF50/white?text=太郎',
//       imageSize: 100
//     };

//   return (
//     <img
//     className="avatar"
//     src={user.imageUrl}
//     alt={'Photo of ' + user.name}
//     style={{
//       width: user.imageSize,
//       height: user.imageSize
//     }}
//   />

//   );
// }
// export default AboutPage;

//   export default function Bio() {
//   return (
//   <div>
//     <div className="intro">
//       <h1>Welcome to my website!</h1>
//     </div>
//     <p className="summary">
//       You can find my thoughts here.
//       <br />
//       <br />
//       <b>
//         And <i>pictures</i>
//       </b>
//       of scientists!
//     </p>
//     </div>
//   );
// }

// const baseUrl = 'https://i.imgur.com/';
// const person = {
//   name: 'Gregorio Y. Zara',
//   imageId: '7vQD0fP',
//   imageSize: 's',
//   theme: {
//     backgroundColor: 'black',
//     color: 'pink'
//   }
// };

// export default function TodoList() {
//   return (
//     <div style={person.theme}>
//       <h1>{person.name}'s Todos</h1>
//       <img
//         className="avatar"
//         src="{person.baseUrl}{person.imageId}{person.imageSize}.jpg"
//         alt="Gregorio Y. Zara"
//       />
//       <ul>
//         <li>Improve the videophone</li>
//         <li>Prepare aeronautics lectures</li>
//         <li>Work on the alcohol-fuelled engine</li>
//       </ul>
//     </div>
//   );
// }

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}




