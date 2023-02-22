import React from "react";
import Box from "@mui/material/Box";
import "./dashboard.css";
import { Avatar, Grid } from "@mui/material";
import Phone from "../../assets/phone.png";
import SMS from "../../assets/sms.png";
import Global from "../../assets/global.png";
import User from "../../assets/user-square.png";
import Calender from "../../assets/calendar.png";
import Lore from "../../assets/Lore.png";
import logo from "../../assets/logo.png";


const Dashboard = () => {
  var styles = { border: "2px solid black" }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container">
          <a class="navbar-brand " href="#"><img src={logo}></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="">
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">BluePrint</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Roadmap</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">lore</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">syndicate</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">about</a>
                </li>

              </ul>


              <button class="btn btn-outline-success me-2" >Mint</button>

            </div>

          </div>
        </div>

      </nav>
      <div className="container mt-3 ">
        <div className="row">
          <div className="col-md-6  p-3 p-lg-5">
            <h1 style={{ fontSize: '40px', fontWeight: "700" }}>THE LORE</h1>

            <p className="text-justify">
              The gateway bridging the digital and physical world together.An army of 5555 Yokai will be set free on the blockchain, roaming the realm. Owning a Yokai gives you access to the realm through the portal.
            </p>
            <p>
              Simply holding a Yokai will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more. While exploring the outlines of Surge we realised there is a huge gap between the virtual and physical world.
              We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together.Our goals will always be for the community - creating, building and innovating together with the community. The realm is a place defying the rules and boundaries you know today, blurring the lines of reality and creating a phygital world. A Yokai's long journey begins with one step.
            </p>
            <p>
              Are you brave enough to enter?
            </p>
            <span className="px-2 py-2  " style={styles}>enter</span>
          </div>
          <div className="col-md-6 p-3 p-lg-5">
            <img src={Lore} className="350" height="350"></img>
          </div>
        </div>

      </div >
    </>
  );
};
export default Dashboard;
