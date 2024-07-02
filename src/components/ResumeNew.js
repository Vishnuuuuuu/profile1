import React, { useEffect, useState } from "react";
import { PDFReader } from "react-read-pdf";
import styled from "styled-components";
import pdf from "../assets/Vpresumene Updated.pdf"; // Ensure the correct path to your PDF

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
  background: #1a1a1d;
  color: #fff;
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin: 20px 0;
  background-color: #ff8c00;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    background-color: #e07b00;
  }
`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ResumeContainer>
      <DownloadButton href={pdf} download="VishnuPrasad_Resume.pdf">
        Download CV
      </DownloadButton>
      <PDFReader url={pdf} width={width * 0.8} showAllPages={false} page={1} />
    </ResumeContainer>
  );
};

export default Resume;
