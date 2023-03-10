import React from 'react'
import { Breadcrumbs } from 'react-daisyui'

type BreadCrumbBarProps = {
    content: Array<string>
}

function BreadCrumbBar({ content }: BreadCrumbBarProps) {

    return (
        <Breadcrumbs className='pl-10 bg-slate-100'>
                <>
                <Breadcrumbs.Item >Home</Breadcrumbs.Item>
                {content.map((res) => {
                    return (
                        <Breadcrumbs.Item >{res}</Breadcrumbs.Item>
                    )
                })}
            </>
        </Breadcrumbs>
    )
}

export default BreadCrumbBar