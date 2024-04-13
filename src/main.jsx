import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom"
import './index.css'
import{ Home,About,Projects,Contact,Layout} from "./index.js"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Route>
    )
)



ReactDOM.createRoot(document.getElementById('root')).render(

<>
<RouterProvider router={router}/>
</>
)
