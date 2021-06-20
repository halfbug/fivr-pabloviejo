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

import { useHistory } from "react-router-dom";
import { Range, getTrackBackground } from 'react-range';


const Web = () => {
    const selectOptions = [
        {value : 'UK', label: 'United kingdom' },
        {value : 'Afghanistan', label: 'Afghanistan' },
        {value : 'USA', label: 'United States' },
        ];

        const [values, setValues] = React.useState([20, 40]);
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
    let history = useHistory();
    return (
        <Page menu={menu} >
           
                <Container className=" md:mt-18 flex self-center p-3 sm:p-8 sm:w-full md:w-5/6 lg:w-5/6 flex-col sm:flex-col mb-6" >
               
                <div className="flex flex-row w-full justify-between mb-3">
                    <h1>Web map creator</h1>
                    <SelectedField label="Templage ID" options={[{value: "MU234S88", label: "MU234S88"},{value: "MU234S88", label: "MU234S58"}]} className="w-3/4"  onChange={()=>history.push('/template')}  />
                </div>

                <div className="flex flex-row w-full justify-between flex-wrap">
                <Thumbnail src={LightMap} className="m-2"  />
                <Thumbnail src={LightMap} className="m-2"  />
                <Thumbnail src={LightMap} className="m-2"  />
                <Thumbnail src={LightMap} className="m-2"  />
                </div>
               
                <div className="flex flex-col sm:flex-row w-full justify-between mb-3 mt-5">
                <div className="flex flex-row justify-between align-middle my-1">
                    
                    <SelectedField label="Entry region" options={selectOptions} />
                </div>
                    
                <div className="flex flex-col sm:flex-row justify-start align-middle w-full sm:w-2/5 my-1">
                    <label className="text-green-600 font-sans w-full md:w-40">Color Scheme</label>
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
                </div>


                <div className="flex flex-col sm:flex-row justify-between mb-3 mt-5">
                <div className="flex flex-row justify-start align-middle my-1">
                  <label className="text-green-600 font-sans mt-2 mr-2 w-full sm:w-20">Style</label>
                  <label className="bg-white border font-semibold border-gray-600 px-1 py-1.5 rounded-md text-green-600">300dpi</label>
                </div>
                <div className="flex flex-row justify-start align-middle my-1  mt-5 md:mt-0 w-full sm:w-2/5" >
                  <label className="text-green-600 font-sans mt-2 mr-2 w-full md:w-40 ">Min max zoom</label>
                  <Range
        values={values}
        step={0.1}
        min={MIN}
        max={MAX}
       onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '36px',
              display: 'flex',
              width: '100%'
            }}
            
          >
            <div
              ref={props.ref}
              style={{
                height: '5px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#0068379b', '#006837', '#0068379b'],
                  min: MIN,
                  max: MAX,
                
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
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
              {values[index].toFixed(0)}
              </div>
            </div>
            <div
            className={`${isDragged? `bg-green-900` : `bg-green-600`}
                        h-4 w-0.5 -mt-3 focus:outline-none flex justify-start align-top relative
                        `}
            />
          </div>
        )}
      />
                </div>
                </div>

                <div className="flex flex-row w-full justify-between items-end mb-3">
                <div className="flex flex-row justify-center">
                
                        <button className="bg-green-600 text-white p-1 flex items-center rounded-sm my-2" onClick={()=>console.log('yes')}>
                                <span class="material-icons-outlined">
                            smart_toy
                            </span>
                        </button>
                        <button className="bg-green-600 text-white p-1 flex items-center rounded-sm my-2" onClick={()=>console.log('yes')}>
                        <span class="material-icons-outlined">
                            mic
                            </span>
                        </button>
                </div>
                    <div>
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
                </div>
                </Container>
           
         
        </Page>
    )
}

export default Web
