import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import TextField from '../components/textField';
import Thumbnail from '../components/thumbnail';
import Button from '../components/button';


const Create = () => {
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-24 flex self-center px-2 py-4 justify-around sm:w-full md:w-5/6 lg:w-4/6 flex-col" >
                
                <div className="flex flex-col sm:flex-row justify-around ">
                <div className="flex md:w-1/4 order-1 sm:order-2 justify-center sm:self-start">
                <Thumbnail
                    className="rounded-full lg:ml-3"
                    onClick={() => {}}
                    src="https://s3.ivisa.com/website-assets/blog/id-photo2.jpg"
                    />
                    </div>
                    <div className="w-full md:w-3/4 px-3 order-1 ">
                        <TextField label="Username" />
                        <TextField label="Email" />
                        <TextField label="Subscription" />
                        <TextField label="Mapbox API" />
                        <TextField label="Maptiler API" />
                        <div className="flex flex-row justify-center">
                        <Button
                            label="Reset Password"
                            onClick={() => {}}
                            primary
                            />
                        <Button
                            label="Change password"
                            onClick={() => {}}
                            primary
                            />
                        </div>
                   
                    </div>
                  
                    
                </div>
                </Container>
           
        
        </Page>
    )
}

export default Create
