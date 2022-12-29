import React from 'react'

export default function News(props: any) {
    return (
        <div>{props.data}</div>
    )
}

export async function getStaticProps(ctx: any) {
    console.log('running getStaticProps', ctx.previewData)
    return {
        props: {
            data: ctx.preview ? 'List of Draft Articles' : 'List of Published Articles'
        }
    }
}
