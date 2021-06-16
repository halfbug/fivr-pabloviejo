import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import DarkMap from '../assets/darkmap.png';
import LightMap from '../assets/lightmap.png';
import Button from '../components/button';
import Thumbnail from '../components/thumbnail';
import Card from '../components/card';


const Analyse = () => {
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-24 flex self-center p-2 justify-around sm:w-full md:w-4/6 lg:w-3/6 flex-col" >
                <h1 className="w-full text-center" > What kind of map do you want to analyse?</h1>
                <div className="flex flex-col sm:flex-row justify-around ">
                   
                    <Card
                    detail={<Button size="large" label="Digital" />}
                    media={<Thumbnail src={DarkMap} className="self-center" />}
                    onClick={() => {}}
                    />

                    <Card
                    detail={<Button size="large" label="Non digital" />}
                    media={<Thumbnail src={LightMap} className="self-center" />}
                    onClick={() => {}}
                    />
                   
                    </div>
                </Container>
           
        
        </Page>
    )
}

export default Analyse
