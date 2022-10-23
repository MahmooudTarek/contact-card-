import React from 'react';
import { Link } from 'react-router-dom';
import image from "../1.jpg"
export default function Navbar(){
    return(
        <div className='container'>

    <img className='iamg' style={{width:"355px"}} src={image} alt='...'></img>
    <h1>Mahmoud Tarek</h1>
    <h3 className='subtitle'>Full-Stack Developer </h3>
    <div className='btns'>
    <a href='mailto:mahmoudtarekahmed97@gmail.com'><button  className='Emailbtn' >Gmail</button></a>    
     <a href='https://www.linkedin.com/in/mahmoudtarekahmed97'>   <button className='linkedinbtn'>LinkedIn</button></a>
    </div>
    <div className='main'>
        <h3 className='about'>About</h3>
        <p>Iam Graduated from faculty of Engineering<br/> 
         Started My Career in Programming<br/>
            Since 1 Year, Iam Mature Positive And Fast Learner
        </p>
        <h3 className='Experience'>Experience</h3>
        <p>Iam an iti graduate,<br/>
             i worked in 3  e-commerce  projects
        </p>

    </div>
        </div>
    )
}