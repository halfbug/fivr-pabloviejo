import React, { useState } from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import DarkMap from '../assets/darkmap.png';
import LightMap from '../assets/lightmap.png';
import Thumbnail from '../components/thumbnail';
import { useHistory } from "react-router-dom";
import Card from '../components/card';




const Template = () => {
  let history = useHistory();
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-18 flex self-center p-3 sm:p-8 sm:w-full md:w-5/6 lg:w-5/6 flex-col sm:flex-col mb-6" >
               
                <div className="flex flex-row w-full justify-between mb-3">
                    <h1>Select a template to use : </h1>
                    
                </div>

                <div className="flex flex-row w-full justify-between flex-wrap">
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={LightMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={LightMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={LightMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={LightMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={LightMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={()=>history.push('/web')}
                />
                <Card
                  className="border p-2 rounded  bg-white text-green-600"
                  detail={<span className="self-center mt-1">Digital</span>}
                  media={<Thumbnail className="self-center" src={DarkMap}/>}
                  onClick={() => console.log("yes")}
                />
                </div>
               
                
                </Container>
           
         
        </Page>
    )
}

export default Template
