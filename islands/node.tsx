
export interface NodeProps {
    title: string;
    inputs: string[];
    outputs: string[];
}

function generateInputs(arr: string[]) {
    return arr.map(v => (
        <div class='pb-1 flex-row'>
            • {v}
        </div>
    ))
}

function generateOutputs(arr: string[]) {
    return arr.map(v => (
        <div class='pb-1 text-right'>
            {v} •
        </div>
    ))
}



export default function Node(props: NodeProps) {
    return (
        <div class='bg-gray-800 text-white font-normal text-sm rounded-md w-52 h-52 flex flex-col'>
            <div class='bg-gray-900 p-1 text-center w-full font-semibold'>
                {props.title}
            </div>
            <div class='flex-row flex-grow'>
                <div class='flex flex-grow w-1/2 border-r-2 border-white border-solid'>
                    <div class=' p-1 flex-row'>
                        {generateInputs(props.inputs)}
                    </div>
                </div>
                <div class='w-1/2 float-right block p-1 m-auto h-full flex-grow'>
                    {generateOutputs(props.outputs)}
                </div>
            </div>
        </div>
    )
}