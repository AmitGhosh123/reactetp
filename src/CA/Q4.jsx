// Create five cards which includes four inputs and pass the data in these cards through props. 
// e.g., card must have one image, one logo and two headers.
//  If anyone click on the card then it must lead the user to next page.
//----------------------------------------

// card code
// import { Link } from "react-router-dom";

// function Card({ imageSrc, logoSrc, header1, header2, linkTo }) {
//   return (
//     <Link to={linkTo}>
//       <div className="card">
//         <img src={imageSrc} alt="card-image" />
//         <img src={logoSrc} alt="card-logo" />
//         <h2>{header1}</h2>
//         <h3>{header2}</h3>
//       </div>
//     </Link>
//   );
// }

// export default Card;


//--------------------------------------
// main page/ app js code

// import Card from "./Card";

// function App() {
//   return (
//     <div className="card-container">
//       <Card
//         imageSrc="https://via.placeholder.com/300x200"
//         logoSrc="https://via.placeholder.com/50x50"
//         header1="Card 1 Header 1"
//         header2="Card 1 Header 2"
//         linkTo="/page1"
//       />
//       <Card
//         imageSrc="https://via.placeholder.com/300x200"
//         logoSrc="https://via.placeholder.com/50x50"
//         header1="Card 2 Header 1"
//         header2="Card 2 Header 2"
//         linkTo="/page2"
//       />
//       <Card
//         imageSrc="https://via.placeholder.com/300x200"
//         logoSrc="https://via.placeholder.com/50x50"
//         header1="Card 3 Header 1"
//         header2="Card 3 Header 2"
//         linkTo="/page3"
//       />
//       <Card
//         imageSrc="https://via.placeholder.com/300x200"
//         logoSrc="https://via.placeholder.com/50x50"
//         header1="Card 4 Header 1"
//         header2="Card 4 Header 2"
//         linkTo="/page4"
//       />
//       <Card
//         imageSrc="https://via.placeholder.com/300x200"
//         logoSrc="https://via.placeholder.com/50x50"
//         header1="Card 5 Header 1"
//         header2="Card 5 Header 2"
//         linkTo="/page5"
//       />
//     </div>
//   );
// }

// export default App;

//---------------------------------------------
//css for card


// .card-container {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
  
//   .card {
//     width: 300px;
//     height: 400px;
//     background-color: #fff;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
//     border-radius: 5px
  
