import { render, Component } from "https://esm.sh/v95/preact@10.11.0/src/index";

import Connection from "../islands/connection.tsx";

export default class Base_Node extends Component {
    dragging: boolean | undefined = undefined;
    
    render(props) {
        return (
            <div class="node">
                <div class="node-header">
                    <h5 onMouseDown={e => {
                        if(this.dragging === undefined) {
                            const element: Partial<HTMLElement> = e.srcElement!;
                            window.onmousemove = e => {
                                if(this.dragging) {
                                    const parent = element.parentElement!.parentElement!;
                                    const rect = parent.getBoundingClientRect()
                                    parent.style!.left = `${e.pageX - rect.width / 2}px`;
                                    parent.style!.top = `${e.pageY}px`;
                                }
                            }
                        }
                        this.dragging = true;
                        const element: Partial<HTMLElement> = e.srcElement!;
                        element.innerHTML = String(this.dragging);
                    }} onMouseUp={e => {
                        this.dragging = false;
                        const element: Partial<HTMLElement> = e.srcElement!;
                        element.innerHTML = String(this.dragging);
                    }}>Base Node</h5>
                </div>
            </div>
        )
    }
}