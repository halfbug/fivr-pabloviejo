import React from 'react'
import Page from '../components/page';
import { menu } from '../sidemenu';
import Software from '../assets/software.png';


const Edit = () => {
    return (
        <Page menu={menu}>
        <img src={Software} />
        </Page>
    )
}

export default Edit
