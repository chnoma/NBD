interface Tweet {
    poster: string,
    reply?: string,
    content: string,
    time: number
}

const users = new Map([
    [
        'nikgeneburn',
        {
            name: 'Nikita Buyanov',
            verified: true
        }
    ],
    [
        'benkressdesign',
        {
            name: 'Ben Kress',
            verified: false
        }
    ]
])

export default function Tweet(props: Tweet) {
    return (
        <article class='text-white bg-black w-1/2 m-auto pl-7 pr-7'>
            <div class='pt-5'>
                <img src={`./users/${props.poster}.jpg`} class='w-16 inline-block mr-5 rounded-full'/>
                <div class='inline-block m-auto align-middle'>
                    <span class='text-2xl leading-tight font-bold'>{users.get(props.poster)!.name}</span>
                    { users.get(props.poster)!.verified ? <img src='./verified.png' class='w-5 float-right m-1 mt-1.5' style='filter: brightness(100)'/> : null}
                    <span class='text-gray-500 block'>@{props.poster}</span>
                </div>
            </div>
            { props.reply ? <span class="block text-gray-500 pt-4">Replying to <a class="text-blue-500" href={`./users/${props.reply}`}>@{props.reply}</a></span> : null}
            <section class='pt-4 text-lg'>
                {props.content}
            </section>
            <aside class='text-gray-500 mt-4 pb-4'>
                {(() => {
                    const date = new Date(props.time * 1000);
                    return `${date.toUTCString()}`
                })()}
            </aside>
        </article>
    );
}