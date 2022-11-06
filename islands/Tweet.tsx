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
        <article class='component-Tweet'>
            <div class='poster box'>
                <img src={`./users/${props.poster}.jpg`} class='avatar'/>
                <div class='poster info'>
                    <span class='name'>{users.get(props.poster)!.name}</span>
                    { users.get(props.poster)!.verified ? <img src='./verified.png' class='verified' /> : null}
                    <span class='handle'>@{props.poster}</span>
                </div>
            </div>
            { props.reply ? <span class="reply">Replying to <a href={`./users/${props.reply}`}>@{props.reply}</a></span> : null}
            <section class='content'>
                {props.content}
            </section>
            <aside class='time'>
                {(() => {
                    const date = new Date(props.time * 1000);
                    return `${date.toUTCString()}`
                })()}
            </aside>
        </article>
    );
}