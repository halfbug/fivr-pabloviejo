import React, { useState } from 'react'
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
import Pointer from '../assets/pointer.png';
import { Range, getTrackBackground } from 'react-range';


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
    const [state, setstate] = useState({values:[50]});
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
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
                   <input className="w-6 h-6" type="color" name="color1" value="#8b8b8b" />
                   </div>

                </div>
                

                <div className="flex flex-row justify-start align-middle my-1 w-2/3">
                    <label className="text-green-600 font-sans w-3/4">Zoom</label>  
                {/* <input type="range" id="vol" name="vol" min="0" max="50" 
                className="bg-green-600" /> */}
                <Range
                step={0.1}
                min={0}
                max={100}
                values={state.values}
                onChange={(values) => setstate({ values })}
                renderTrack={({ props, children }) => (
                    <div
                    onMouseDown={props.onMouseDown}
                    onTouchStart={props.onTouchStart}
                    style={{
                        ...props.style,
                        height: "36px",
                        display: "flex",
                        width: "100%"
                    }}
                    >
                    <div
                        ref={props.ref}
                        style={{
                        height: "5px",
                        width: "100%",
                        borderRadius: "4px",
                        background: getTrackBackground({
                            values: state.values,
                            colors: ["#006837", "#0068379b"],
                            min: MIN,
                            max: MAX
                        }),
                        alignSelf: "center"
                        }}
                    >
                        {children}
                    </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                    {...props}
                    style={{
                        ...props.style,
                        
                    }}
                    className="bg-gray-600 h-1.5 w-0.5 rounded-t-md flex"
                    >
                    <div
                        className={`${isDragged? `bg-green-900` : `bg-green-600`}
                        h-4 w-0.5 -mt-3 focus:outline-none flex justify-start align-top relative
                        `}
                    >
                    <div className={`absolute bg-green-600 text-white rounded-lg p-0.5 -left-2 -top-4 text-xs focus:outline-none ${isDragged? `bg-green-900` : `bg-green-600`} `}>
                        {state.values[0].toFixed(0)}</div>
                    
                    </div>
                    </div>
                    )}
                />
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
                 <div className="flex flex-row justify-between align-middle my-1">
                    
                    <SelectedField label="Templage ID" options={[{value: "MU234S88", label: "MU234S88"}]} className="w-3/4"  />
                </div>
                <div className="flex flex-col sm:flex-row justify-center p-3 sm:h-3/6 align-top">
                   <Thumbnail src={DarkMap} className="flex  flex-col w-full self-start"/>
                </div>
                <div className="flex flex-col sm:flex-col justify-end align-middle p-2">
                <div className="flex flex-row justify-center align-middle p-2">
                    <input type="radio" name="gender" value="jpg" />  <label className="text-green-600 font-sans self-center">JPG</label>
                </div>
                <div className="flex flex-row justify-center align-middle p-2">
                    <input type="radio" name="gender" value="png" />  <label className="text-green-600 font-sans self-center">PNG</label>
                </div>
                <div className="flex flex-row justify-center align-middle p-2">
                    <input type="radio" name="gender" value="pdf" />  <label className="text-green-600 font-sans self-center">PDF</label>
                </div>
                
  
                </div>
                <div className="flex flex-col sm:flex-row justify-end align-middle p-3">
                   <Button label="Download map" primary />
                </div>
                 </div>
                </Container>
           
         
        </Page>
    )
}

export default Analyse
