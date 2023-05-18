import React from 'react'
//sass를 그냥 import할 수도 있고(전체에 디자인 적용)
//module로 import해서 사용할 수 있다

// import './sass.scss'
import style from './sass.module.scss'

export default function SassComp() {
    return (
        // <div className='color'>SassComp</div>
        <div className={style.color}>SassComp</div>
    )
}
