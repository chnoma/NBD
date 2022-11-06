import { render, Component, ComponentProps, Attributes, ComponentChildren, Ref, ComponentChild } from 'https://esm.sh/v95/preact@10.11.0/src/index';

import Avatar from '../islands/Avatar.tsx';

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
        <article class='outer tweet' style={{
            padding: '1.5em',
            width: '40em',
            fontSize: '15px',
            backgroundColor: 'black',
            color: 'white',
            margin: 'auto'
        }}>
            <div class='poster box'>
                <img src={`./users/${props.poster}.jpg`} style={{
                    display: 'inline-block',
                    width: `3.5em`,
                    borderRadius: '50%',
                    border: 'solid',
                    borderWidth: '0em',
                    borderColor: 'white',
                    marginRight: '1em'
                }}/>
                <div class='poster info' style={{
                    display: 'inline-block',
                    margin: 'auto',
                    verticalAlign: 'middle'
                }}>
                    <span style={{
                        display: 'inline-block',
                        fontSize: '1.4em',
                        fontWeight: '700',
                        lineHeight: '1em'
                    }}>{users.get(props.poster)!.name}</span>
                    { users.get(props.poster)!.verified ? <img src='./verified.png' style={{
                        width: '1.2em',
                        display: 'inline-block',
                        margin: '0.2em',
                        float: 'right',
                        filter: 'brightness(0) invert(1)'
                    }} /> : null}
                    <span style={{
                        display: 'block',
                        lineHeight: '1em',
                        fontSize: '1em',
                        fontWeight: '100',
                        color: 'grey'
                    }}>@{props.poster}</span>
                </div>
            </div>
            { props.reply ? <span class="reply" style={{
                    display: 'block',
                    color: 'grey',
                    paddingTop: '1em'
                }}>Replying to <a href={`./users/${props.reply}`} style={{
                    color: 'rgb(29, 155, 240)'
                }}>@{props.reply}</a></span> : null}
            <section class='content' style={{
                fontSize: '1.5em',
                width: 'auto',
                lineHeight: '1.2em',
                paddingTop: '0.8em'
            }}>
                {props.content}
            </section>
            <aside style={{
                color: 'grey',
                marginTop: '1em'
            }}>
                {(() => {
                    const date = new Date(props.time * 1000);
                    return `${date.toUTCString()}`
                })()}
            </aside>
        </article>
    );
}