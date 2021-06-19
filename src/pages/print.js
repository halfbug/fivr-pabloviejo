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

    const accentOptions = [
            {value:'elegant', label: "Elegant"},
            {value:'light', label: "Light"},
            {value:'dark', label: "Dark"},

    ];
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-18 flex self-center p-2 justify-around sm:w-full md:w-5/6 lg:w-4/6 flex-col sm:flex-row mb-6" >
                 <div className="flex flex-col justify-around w-full sm:w-3/5  px-3 py-2">
                 <div className="flex flex-row justify-between align-middle">
                    <h1>Print map creator</h1>
                    
                </div>

                <div className="flex flex-row justify-between align-middle my-1">
                    
                    <SelectedField label="Entry region" options={selectOptions} />
                </div>

                <div className="flex flex-row justify-between align-middle my-1">
                    
                    <SelectedField label="Accent" options={accentOptions} />
                </div>
                <div className="flex flex-row justify-start align-middle my-1">
                    <label className="text-green-600 font-sans">Color Scheme</label>
                   <div className="flex flex-row justify-between" >

                   <input className="w-6 h-6" type="color" name="color1" value="#69a187" />
                   <input className="w-6 h-6" type="color" name="color1" value="#f2c569" />
                   <input className="w-6 h-6" type="color" name="color1" value="#f28a69" />
                   <input className="w-6 h-6" type="color" name="color1" value="#69c8f2" />
                   <input className="w-6 h-6" type="color" name="color1" value="#9fe075" />
                   <input className="w-6 h-6" type="color" name="color1" value="#c469f2" />

                   </div>

                </div>
                

                <div className="flex flex-row justify-start align-middle my-1">
                    <label className="text-green-600 font-sans w-1/4">Zoom</label>  
                <input type="range" id="vol" name="vol" min="0" max="50" 
                className="bg-green-600" />
                </div>
                
                <div className="flex flex-row justify-start align-middle my-1">
                    
                    <SelectedField label="Size" options={[{value: 'cm', label: "cm"}, {value: 'inch', label: 'inch'}]} className="w-2/4" />
                    <div className="ml-2 mt-0.5">
                        <label className="bg-white border border-gray-600 px-1 py-1.5
                        h-7 mt-2 rounded-md  text-green-600 font-semibold">29.7</label> X {' '}
                        <label className="bg-white border font-semibold border-gray-600 px-1 py-1.5
                        h-7 mt-2 rounded-md text-green-600">21</label>
                        </div>
                </div>

                <div className="flex flex-row justify-start align-middle my-1">
                  <label className="text-green-600 font-sans mt-2 mr-2">Color Resulation</label>
                  <label className="bg-white border font-semibold border-gray-600 px-1 py-1.5 rounded-md text-green-600">300dpi</label>
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
