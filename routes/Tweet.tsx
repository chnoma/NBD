import { render, Component, ComponentProps, Attributes, ComponentChildren, Ref, ComponentChild } from "https://esm.sh/v95/preact@10.11.0/src/index";


export default function Tweet(props?: Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<any> | undefined; }> | undefined, state?: Readonly<{}> | undefined, context?: any) {    
    return (
        <div style={{
            border: 'solid',
            borderColor: '#F0F'
        }}>
            {props?.children} That's a bannana man
        </div>
    );
}