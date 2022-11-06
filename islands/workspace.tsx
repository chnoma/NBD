import { render, Component, ComponentProps } from "https://esm.sh/v95/preact@10.11.0/src/index";

export default class Workspace extends Component {
    msg!: string;
    render() {
        return (
            <div class="node">
                <div class="node-header">
                    <h5 onMouseDown={console.log}>Base Node</h5>
                </div>
            </div>
        )
    
    }
    
}