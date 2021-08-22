import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import './index.css';
import Sdata from './Sdata';


function netcard(val){
    console.log(val);
    return(
        <Card imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
        />
    );
}

ReactDom.render(
    <>

    <h1 className='heading_style'>List of top 5  Netflix  Series in 2021</h1>

        {Sdata.map(netcard)}
        
    </>
    , document.getElementById('root')
);