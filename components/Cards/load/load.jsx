import react from "react";
import { LoadingStyles } from "../../../styles/loading/load";

export default function Loading(props){
    return(
    <LoadingStyles width={props.width} >
        <div className="loading center-loading"></div>
    </LoadingStyles>
    )
}
