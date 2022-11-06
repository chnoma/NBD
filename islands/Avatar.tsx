import { render, Component, ComponentProps, Attributes, ComponentChildren, Ref, ComponentChild } from "https://esm.sh/v95/preact@10.11.0/src/index";


export default function Avatar(props: {
    size: number,
}) {
    return (
        <img src='https://images.heb.com/is/image/HEBGrocery/000377497' style={{
            width: `${props!.size}px`,
            borderRadius: '50%',
            border: 'solid',
            borderWidth: '5px',
            borderColor: 'black'
        }} onClick={e => {
            console.log(e)
        }}/>
    );
}