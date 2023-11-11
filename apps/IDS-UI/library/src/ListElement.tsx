import { FunctionComponent } from "react";

interface ListElementProps{
    name: string;
}

export const ListElement = (props: ListElementProps) => {
    return(
        <h1>Mein name ist {props.name}</h1>
    );
}