import React from 'react'
import './progressbar.css'
import { Progress } from 'antd';

const ProgressBar = ({title,percentage}) => {
  return (
    <>
    <div className='progress-bar'>
        <div className='title-container'>
            <div className='title-main'>{title}</div>
            <div className='percentage'>{percentage}</div>

        </div>
    </div>
    <Progress percent={50} status="active" strokeColor={'#36A54680'} />
    </>
  )
}

export default ProgressBar