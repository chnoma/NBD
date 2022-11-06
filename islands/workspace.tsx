import { render, Component, ComponentProps, Attributes, ComponentChildren, Ref, ComponentChild } from "https://esm.sh/v95/preact@10.11.0/src/index";


export default class Divider extends Component {

    render(props?: Readonly<Attributes & { children?: ComponentChildren; ref?: Ref<any> | undefined; }> | undefined, state?: Readonly<{}> | undefined, context?: any): ComponentChild {
        console.log("Rendering <Divider>")
        return (
                // that works
                <div>
                    {props!.children}
                </div>
                // and that breaks
                // .......
                // wanna try pushing it? the delay and no re-render kinda makes me wonder if you have a client side script doing this
                // because it's really weird
            
        );
    }
}