import React from "react";
import MainLayout from "../MainLayout";
import "./Home.scss"
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { countNumber, SubNumber, ResetNumber } from "../../slices/countSlice";

const Home = () => {

    const dispatch = useDispatch();
    //const [point, setPoint] = useState(0);
    const point = useSelector((state) => state.counter.counter)

    const countNum = () => {
        //setPoint((state) => state + 1);
        dispatch(countNumber());
}

    const SubNum = () => {
        //setPoint((state) => state - 1);
        dispatch(SubNumber());
}

    const ResetNum = () => {
      //setPoint((state) => state * 0);
        dispatch(ResetNumber());
    }

  //home screen

    return (
    <MainLayout>
        <div className="pointer">
            <h1>Facebook</h1>
                <div className="counter">
                    <h2>{point}</h2>
                    <div className="buttons">
                        <Button onClick={countNum}>count +1</Button>
                        <Button onClick={SubNum}>count -1</Button>
                        <Button onClick={ResetNum}>Reset</Button>
                    </div>
                </div>
            </div>
    </MainLayout>)
}

export default Home;
