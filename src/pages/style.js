import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import  Container from '../components/container';
import DarkMap from '../assets/darkmap.png';
import LightMap from '../assets/lightmap.png';
import Button from '../components/button';
import Thumbnail from '../components/thumbnail';
import Card from '../components/card';
import SelectedField from '../components/selectField';
import TextField from '../components/textField';


const Analyse = () => {
    const selectOptions = [
        {value : 'UK', label: 'United kingdom' },
        {value : 'Afghanistan', label: 'Afghanistan' },
        {value : 'USA', label: 'United States' },
        ];
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-18 flex self-center p-2 justify-around sm:w-full md:w-5/6 lg:w-4/6 flex-col sm:flex-row mb-6" >
                 <div className="flex flex-col justify-around w-full sm:w-3/5  px-3 py-2">
                 <div className="flex flex-row justify-between align-middle">
                    <h1>Style analytics</h1>
                    <Button size="small" primary label="Upload style" />
                </div>

                <div className="flex flex-row justify-between align-middle my-4">
                    
                    <SelectedField label="Entry region" options={selectOptions} />
                </div>

                <div className="flex flex-col sm:flex-row justify-between align-middle">
                    <TextField label="Nr of Groups" className="w-1/3 sm:mr-3" />
                    <TextField label="Nr of Groups" className="w-1/3" />
                    
                </div>

                <div className="flex flex-col sm:flex-row justify-between align-middle">
                    <TextField label="Nr of Layers" className="w-1/3 sm:mr-3" />
                    <TextField label="Nr of Layers" className="w-1/3" />
                    
                </div>

                <div className="flex flex-col sm:flex-row justify-between align-middle">
                    <TextField label="Nr of Colors" className="w-1/3 sm:mr-3" />
                    <TextField label="Nr of Colors" className="w-1/3" />
                    
                </div>
                 
                <div className="flex flex-col sm:flex-row justify-between align-middle">
                    <TextField label="Glph URL" className="w-2/3 sm:mr-3" />
                </div>

                <div className="flex flex-col sm:flex-row justify-between align-middle">
                    <TextField label="Nr of Layers" className="w-2/3 sm:mr-3" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between align-middle">
                    <TextField label="Nr of Colors" className="w-2/3 sm:mr-3" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between align-middle mt-3">
                    <div className="border border-gray-600 bg-white text-green-600 px-3"> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis porro minus aspernatur iusto quae cum molestias iure iste excepturi sapiente inventore temporibus delectus quisquam hic, dolor accusantium esse? Delectus, placeat!</p>
                    <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum esse ipsam laboriosam nesciunt ab distinctio, voluptas, sapiente iste earum minima in similique impedit quod. Quos nobis maxime suscipit reprehenderit at.
                    </p> 
                </div>
                </div>
                 </div>
                 <div className="flex-col justify-around w-full sm:w-2/5 px-3">
                 <div className="flex flex-none flex-col sm:flex-row justify-between align-middle p-3">
                   <span className="text-green-600" >Style ID</span>
                   <span className="text-green-600">MB013425786</span> 
                </div>
                <div className="flex flex-col sm:flex-row justify-center p-3 sm:h-5/6 align-top">
                   <Thumbnail src={DarkMap} className="flex  flex-col w-full self-start"/>
                </div>
                <div className="flex flex-col sm:flex-row justify-end align-middle p-3">
                   <Button label="Download JSON" primary />
                </div>
                 </div>
                </Container>
           
         
        </Page>
    )
}

export default Analyse
