import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import DarkMap from '../assets/darkmap.png';
import LightMap from '../assets/lightmap.png';
import Button from '../components/button';


const Analyse = () => {
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-24 flex self-center p-2 justify-around sm:w-full md:w-3/6 lg:w-2/6 flex-col" >
                <h1 className="w-full text-center" > What kind of map do you want to analyse?</h1>
                <div className="flex flex-col sm:flex-row justify-around ">
                    <div className="flex flex-col w-2/5">
                        
                        <img src={DarkMap} />
                        <Button size="large" label="Digital" />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <img src={LightMap} />
                        <Button size="large" label="Non digital" />
                        </div>
                    </div>
                </Container>
           
        
        </Page>
    )
}

export default Analyse
