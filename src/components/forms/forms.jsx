/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import './forms.css';
import {Input} from '../layouts/Inputs/Input';
export const forms = () => {
    return (
        <form>
            <p>Uncompleted</p>
            <Input type="password"  options={{'placeholder':"password",'name':'ritik singh',required: true}}/>
            <Input type="text"  options={{'placeholder':"Name",'name':'ritik singh',maxLength:8,required: true}}/>
            <Input type="submit" options={{'value':'Submit'}}/>
        </form>
    )
}
