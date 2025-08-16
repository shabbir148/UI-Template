import React from "react";
import "./App.css";
import { FiPhone } from "react-icons/fi";
import { FaRegFileAlt } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { BsDiagram3 } from "react-icons/bs";

export default function App() {
  return (
    <div className="container">
      <div className="the-use-case">
        <span className="blue-bar" /> The Use Case
      </div>

      <div className="content">
        {/* Left Panel */}
        <div className="left-panel">
          <div className="card">
            <FaRegFileAlt className="card-icon" />
            <p>Smart Lead Capture</p>
          </div>
          <div className="card">
            <BiMessageDetail className="card-icon" />
            <p>Conversational Buyer Engagement</p>
          </div>
          <div className="card">
            <BsDiagram3 className="card-icon" />
            <p>Intent-Based Prioritization</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel-container">
          <div className="right-panel-border">
            <div className="right-panel">
              {/* Waveform & Tag */}
              <div className="waveform">
                <div className="wave"></div>
                <span className="tag">Real Estate</span>
                <div className="wave"></div>
              </div>

              {/* Arc & Call Button */}
              <div className="arc-container">
                <svg
                  className="arc-svg"
                  width="400"
                  height="200"
                  viewBox="0 0 400 200"
                >
                  <path
                    d="M 20 180 A 180 180 0 0 1 380 180"
                    fill="none"
                    stroke="#2156f3"
                    strokeWidth="2"
                  />
                </svg>

                <button className="call-btn">
                  <FiPhone size={22} />
                </button>
              </div>

              {/* Text */}
              <p className="call-text">
                Tap the call button to speak <br /> with our AI Agent
              </p>

              {/* Timer */}
              <div className="timer">0:00</div>

              {/* Try Asking */}
              <p className="try-asking">Try Asking</p>
              <div className="example-bubble">
                <p>• Can you help me find a listing I saw yesterday?</p>
                <p>
                  • Can you show me homes for sale under $500k near San Diego?
                </p>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="btn-container">
            <button className="end-call-btn">SCHEDULE A CUSTOM DEMO →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
