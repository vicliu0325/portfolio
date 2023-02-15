import React from 'react'
import WorkItem from './WorkItem'
const data = [
    {
        year: '2022',
        title: '資策會前端工程師養成班',
        duration: '5 Months',
        details: '缺E-BOOK 電子書販售平台 | 聊天室 / 優惠券'
    },
    {
        year: '2020',
        title: '台中軟體園區 Dali Art藝術廣場 | 營運人員',
        duration: '2 Years',
        details: '櫃台接待 / 客服紀錄 / 展場介紹 / 展場佈置 / 票務處理 / 行銷活動 / 商品管理'
    },
    {
        year: '2018',
        title: 'ROLLING INDUSTRIAL CORPORATION | 設計人員',
        duration: '6 Months',
        details: '法蘭克福車展型錄設計'
    },
    {
        year: '2016',
        title: '禾盛企業Logo設計徵選比賽',
        duration: '1 week',
        details: '中區學生組佳作'
    }
]

function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year}  
                title={item.title} 
                duration={item.duration} 
                details={item.details} />
        ))}
    </div>
  )
}

export default Work