import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ethers } from "ethers";

import { ContractABI } from "../src/content/mint/Contract";
const background = require("./images/Background/bg.svg").default;
import CoreTeam from "./components/core_team/CoreTeam";
import EnteringSection from "./components/enteringSection";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import LandingSection from "./components/landingSection";
import Lore from "./components/lore";
import Navbar from "./components/navbar";
import NFT from "./components/NFT";
import Roadmap from "./components/roadmap/Roadmap";
import SharedModal from "./components/SharedModal/SharedModal";
import Team from "./components/team/Team";
import Mint from "./components/Mint/Mint.jsx";
import "./App.css";

function App() {
  console.log("path", window.location.pathname);
  const [showVidModal, setShowVidModal] = useState(false);
  const [video_src, setVideo_src] = useState("");
  // const [enter, setEnter] = useState(
  //   window.location.pathname === "/" ? false : true
  //   );
    const [wallet, setWallet] = useState("Connect a Wallet");
    const [logout, setLogout] = useState(false);
    const [maxMintAmount, setMaxMintAmount] = useState();
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState([]);
    const [userMintedAmount, setUserMintedAmount] = useState(0);
    
  const { REACT_APP_NETWORK } = process.env;
  const { REACT_APP_NETWORK_CHAIN_ID } = process.env;
  const { REACT_APP_CONTRACT_ADDRESS } = process.env;

  const notify = (message) => {
    toast.error(message, {
      toastId: "custom-id-yes",
    });
  };
  
  const setupConnections = async () => {
    if (window.ethereum != null) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      if (REACT_APP_NETWORK !== network.name) {
        notify(
          `Not on a correct network. Change your network to "${REACT_APP_NETWORK}"`
          );
          return false;
        } else {
          await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();
          const address = await signer.getAddress();
          return address;
        }
      } else {
        notify("No Ether wallet available");
        return false;
      }
  };

  const connection = async () => {
    const res = await setupConnections();
    if (res === false) {
      setWallet("Connect a Wallet");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: REACT_APP_NETWORK_CHAIN_ID }],
      });
    } else {
      setLogout(true);
      setWallet(res.slice(0, 6) + "..." + res.slice(36, 42));
    }
  };
  
  const disconnect = async () => {
    setWallet("Connect a Wallet");
    setLogout(false);
    setUserMintedAmount(0);
    setMaxMintAmount("-");
    setPrice("-");
    setImages([]);
  };
  
  const readContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
      );
      const maxMintAmount = await contract.maxMintAmount();
    let accounts = await provider.send("eth_requestAccounts", []);
    let address = accounts[0];
    const userMintedAmount = await contract.balanceOf(address);
    const price = await contract.cost();
    setMaxMintAmount(parseInt(maxMintAmount, 10));
    setUserMintedAmount(parseInt(userMintedAmount, 10));
    setPrice(Number(ethers.utils.formatEther(price)));
  };
  
  const getTokens = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(
      REACT_APP_CONTRACT_ADDRESS,
      ContractABI,
      provider
      );
      let accounts = await provider.send("eth_requestAccounts", []);
      let address = accounts[0];
      const imagesTockens = await contract.nftsOnwedByWallet(address);
      let imagesLocal = [];
      await imagesTockens.map(async (image) => {
        const url = await contract.tokenURI(parseInt(image, 10));
        let result = await url.replace("ipfs://", "https://ipfs.io/ipfs/");
        const jsonBody = await (await fetch(result)).json();
        imagesLocal.push(
          await jsonBody.image.replace("ipfs://", "https://ipfs.io/ipfs/")
          );
        });
        setTimeout(() => {
          setImages(imagesLocal);
        }, [3000]);
      };
      const enable_Modal = (vid_src) => {
        setVideo_src(vid_src);
        setShowVidModal(true);
      };

      useEffect(() => {
        connection();
        Aos.init({ duration: 3000 });
      }, []);
      
      return (
        <>
      {/* {enter ? ( */}
        <div className="bg-background-img">
          <ToastContainer position="top-center" autoClose={2000} />
          <BrowserRouter>
            <Navbar
              connection={connection}
              disconnect={disconnect}
              getTokens={getTokens}
              logout={logout}
              readContract={readContract}
              wallet={wallet}
              />

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <LandingSection />
                    <Lore />
                    <NFT />
                    <Roadmap enable_Modal={enable_Modal} />
                    <CoreTeam />
                    <Team />
                    <Faq />
                  </>
                }
              />
              <Route
                exact
                path="/mint"
                element={
                  <>
                    <Mint
                      wallet={wallet}
                      price={price}
                      images={images}
                      userMintedAmount={userMintedAmount}
                      maxMintAmount={maxMintAmount}
                      disconnect={disconnect}
                      connection={connection}
                      readContract={readContract}
                      getTokens={getTokens}
                      logout={logout}
                      setUserMintedAmount={setUserMintedAmount}
                      setMaxMintAmount={setMaxMintAmount}
                      setPrice={setPrice}
                      setImages={setImages}
                    />
                  </>
                }
              />
            </Routes>
            <Footer />
          </BrowserRouter>

          {showVidModal && (
            <SharedModal closeModal={setShowVidModal} video_src={video_src} />
          )}
        </div>
    </>
  );
}

export default App;
