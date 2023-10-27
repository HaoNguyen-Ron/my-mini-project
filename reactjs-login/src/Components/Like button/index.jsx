import React from 'react';
import './button.css'


export default function LikeButton({ icon, name, classes, onclickToLike}) {

    return ( 
        <>
        <h1 className='mt-5'>Click here to like</h1>
        <button className={`btn ${classes}`} onClick={onclickToLike}>
            <span className="icon icon--white">{icon}</span>
            {name}
        </button> 
        </>
    );
};

