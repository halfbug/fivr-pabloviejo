import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import DarkMap from '../assets/darkmap.png';
import LightMap from '../assets/lightmap.png';
import Button from '../components/button';
import Thumbnail from '../components/thumbnail';
import { useHistory } from "react-router-dom";
import Card from '../components/card';


const Create = () => {
    let history = useHistory();

    function handlePrint() {
     history.push("/print");
    }
    function handleWeb() {
        history.push("/web");
       }
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-24 flex self-center p-2 justify-around sm:w-full md:w-4/6 lg:w-3/6 flex-col" >
                <h1 className="w-full text-center" > What kind of map do you want to create?</h1>
                <div className="flex flex-col sm:flex-row justify-around ">
                    
                    <Card
                    detail={ <Button size="large" label="Web map" onClick={handleWeb}  />}
                    media={<Thumbnail src={DarkMap}className="self-center"  />}
                  
                    />
                  
                    <Card
                    detail={ <Button size="large" label="Print" onClick={handlePrint} />}
                    media={<Thumbnail src={LightMap} className="self-center"  />}
                    onClick={() => {}}
                    />
                </div>
                </Container>
           
        
        </Page>
    )
}

export default Create
