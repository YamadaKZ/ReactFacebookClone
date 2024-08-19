import React from "react";
import MainLayout from "../MainLayout";
import "./Home.scss"
import { useState } from "react";
import { Button } from "@mui/material";

const Home = () => {
    const [point, setPoint] = useState(0);

    const countNumber = () => {
        setPoint((state) => state + 1);
}

    const SubNumber = () => {
        setPoint((state) => state - 1);
}

    const ResetNumber = () => {
      setPoint((state) => state * 0);
    }

  //home screen

    return (
    <MainLayout>
        <div className="pointer">
            <h1>Facebook</h1>
                <div className="counter">
                    <h2>{point}</h2>
                    <div className="buttons">
                        <Button onClick={countNumber}>count +1</Button>
                        <Button onClick={SubNumber}>count -1</Button>
                        <Button onClick={ResetNumber}>Reset</Button>
                    </div>
                </div>
            </div>
    </MainLayout>)
}

export default Home;
