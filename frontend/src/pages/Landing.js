import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../components/Header';
import projectsData from '../projects-data';
import * as Crypto from '../crypto.js';

const stripeStyles = {
  backgroundImage: 'url("/bg2.png")',
  minHeight: '350px',
};

const Banner = () => (
  <div style={stripeStyles} className="text-center">
    <h1 className="text-3xl pt-20">
      <b>SAMSARA</b> 
    </h1>
    <div className="max-w-2xl mt-5 m-auto"></div>
     <div className="max-w-xl mt-5 m-auto">
      Recurring crypto payments.
      </div>
    <div className="max-w-2xl mt-5 m-auto"></div>

    <div className="max-w-2xl mt-5 m-auto">
      Make your non-profit organization or business sustainable with regular
      CRYPTO subscriptions.
    </div>
  </div>
);

const Project = ({ title, description, projectId, image }) => {
  // TODO: use @web3-onboard/react or custom hook for onboard integration
  // Till that time we need to force reload pages to prevent 
  // double init of onBoard instance
  //const navigate = useNavigate();

  return (
    <div 
      onClick={()=>{window.location.href=`/project/${projectId}`}}
        className="card card-normal m-w-80 w-80 bg-base-100 shadow-xl flex-auto max-h-96 m-auto cursor-pointer">
      <div className="card-body">
        <div className="avatar">
          <div className="w-11 rounded">
            <img src={image} />
          </div>
        </div>
        <h2 className="card-title">{title}</h2>
        <p className="line-clamp-3">{description}</p>
        <div className="card-actions justify-end">
          <a className="btn btn-link" href={`/project/${projectId}`}>
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
}

const Landing = (props) => {
  const [wallet, setWallet] = useState(undefined);

  const onConnectWallet = async () => {
    const wallet = await Crypto.connectWallet();
    setWallet(wallet);
  };

  useEffect(() => {
    Crypto.loadWallet();
    return Crypto.saveWalletOnChange(setWallet);
  }, []);

  return (
    <div>
      <Header wallet={wallet} connectWallet={onConnectWallet} />
      <Banner />
      <div className="container-lg mx-12 my-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map(({ projectId, title, description, image }) => (
          <Project
            projectId={projectId}
            title={title}
            description={description}
            image={image}
            key={projectId}
          />
        ))}
      </div>
    </div>
  );
};
export default Landing;