import { render, Component } from "https://esm.sh/v95/preact@10.11.0/src/index";

import Connection from "../islands/connection.tsx";

export default class Base_Node extends Component {
    pos1 = 0;
    pos2 = 0;
    pos3 = 0;
    pos4 = 0;
    render() {
        return (
            <div class="node">
                <div class="node-header">
                    <h5 onMouseDown={e => {
                    const element: Partial<HTMLElement> = e.srcElement!;
                    const parent = element.parentElement?.parentElement;
                    e = e || window.event;
                    e.preventDefault();
                    let pos3 = e.clientX;
                    let pos4 = e.clientY;
                    document.onmouseup = () => {
                        document.onmouseup = null;
                        document.onmousemove = null;
                    }
                    document.onmousemove = e => {
                        e = e || window.event;
                        let pos1 = pos3 - e.clientX;
                        let pos2 = pos4 - e.clientY;
                        pos3 = e.clientX;
                        pos4 = e.clientY;
                        parent!.style.top = (parent!.offsetTop - pos2) + 'px';
                        parent!.style.left = (parent!.offsetLeft - pos1) + 'px';
                    }
                }}>Base Node</h5>
                </div>
            </div>
        )
    
    }
    
}