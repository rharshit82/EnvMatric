import React,{useEffect,useState} from 'react'
import "./CSS/Wallscreens.css";
import { useParams } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import goodjob from './goodjob.png'
const ImageScreen = () => {
    let history = useHistory();

    const { id } = useParams()
    const [image,setImage]=useState("");
    const [isClean, setIsClean] = useState(false);
    useEffect(() => {
        const fetchImage = async () =>{
            const res = await axios.get(`/api/images/${id}`, {responseType: "arraybuffer"});
            const img = await Buffer.from(res.data, 'binary').toString('base64')
            console.log(res.data)
            setImage(img)
        }
        fetchImage()
    }, [])
    const  cleanUpdate = async () =>{
        setIsClean(true);
        const res = await axios.get(`/api/clean/${id}`)
    }
    return (
        <>
        <div className="container my-1 imagedisp py-2">
            {image!==undefined? (<img src={`data:image/jpeg;base64,`+image} className="my-3"/>): <p>Loading..</p>}
        </div>
        {isClean?
        <img className="d-block mx-auto" src={goodjob} />: 
        <div>
        <Button variant="dark" className="d-block mx-auto my-5" onClick={cleanUpdate}>The Place is Clean</Button>
        </div>
        }
        
        <div>
            <Button variant="primary" className="d-block mx-auto my-5" onClick={()=> history.push('/wall')}>Go Back</Button>
        </div>
        </>
    )
}

export default ImageScreen
