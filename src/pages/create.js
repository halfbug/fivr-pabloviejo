import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import DarkMap from '../assets/darkmap.png';
import LightMap from '../assets/lightmap.png';
import Button from '../components/button';
import Thumbnail from '../components/thumbnail';


const Create = () => {
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-24 flex self-center p-2 justify-around sm:w-full md:w-4/6 lg:w-3/6 flex-col" >
                <h1 className="w-full text-center" > What kind of map do you want to create?</h1>
                <div className="flex flex-col sm:flex-row justify-around ">
                    <div className="flex flex-col w-2/5">
                        
                        <Thumbnail src={DarkMap}className="self-center"  />
                        <Button size="large" label="Web map" />
                    </div>
                    <div className="flex flex-col w-2/5">
                        <Thumbnail src={LightMap} className="self-center"  />
                        <Button size="large" label="Print" />
                        </div>
                    </div>
                </Container>
           
        
        </Page>
    )
}

export default Create
