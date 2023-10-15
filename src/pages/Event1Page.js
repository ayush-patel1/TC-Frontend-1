import React from "react";
import EventForm from "../forms/EventForm";
import Title from "../components/Title";

const Event1Page = ()=>{
    return(
        <>
        <Title color={"Event"} noncolor={"Name"} />
        <EventForm/>
        </>
    )
}

export default Event1Page;