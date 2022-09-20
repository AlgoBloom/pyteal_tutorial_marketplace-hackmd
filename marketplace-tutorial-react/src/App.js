import React, {useState} from "react";
import Cover from "./components/Cover";
import './App.css';
import Wallet from "./components/Wallet";
import {Container, Nav} from "react-bootstrap";
// import Products from "./components/marketplace/Products";
// import {Notification} from "./components/utils/Notifications";
import {indexerClient, myAlgoConnect} from "./utils/constants";
import coverImg from "./assets/img/sandwich.jpg"