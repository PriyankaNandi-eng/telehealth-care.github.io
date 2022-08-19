
import React from "react";
import styled from "styled-components";
// import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import Sdata from './Sdata'


const Service = () => {
  return (
    <Wrapper className="section">
      <h1 style= {{textAlign: "center"}} className="common-heading">OUR DOCTORS</h1>
      <div className="container grid grid-three-column">
        {Sdata.map((curElem) => {
          const { imgsrc, title } = curElem;
          return (
            <div className="card">
              <figure>
                <img src={imgsrc} alt={imgsrc} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                {/* <p>{description}</p> */}
                <NavLink to="/contact">
                  <Button className="btn">Book Appointment</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-align:center;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgba(0,93,148,255);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.4rem;
      &:hover {
        background-color: #fff;
        color: rgba(0,93,148,255);
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 10, 60, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Service;














// import React from 'react'
// import Card from './Card'
// import Sdata from './Sdata'

// const Service = () => {
//   return (
//   <>
//     <div className="my-5">
//       <h1 className="text-center">Our Services</h1>
//     </div>
//     <div className="container-fluid mb-5">
//       <div className="row">
//         <div className="col-10 mx-auto">
//            <div className="row gy-5">
//            {
//             Sdata.map((val, ind) =>{
//               return <Card
//                 imgsrc={val.imgsrc} key={ind} title={val.title} btn={val.btn}
//               />
//             })
//            }

          
//           </div>
//         </div>
//       </div>
//     </div>
//   </>
//   )
// }

// export default Service
