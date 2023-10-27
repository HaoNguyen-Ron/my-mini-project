import React from 'react';
import './list.css'

function List({musics,onSelectMuics, selectedId, onLikedMusic, selectedHeart}) {
    // const [selectedHeart, setselectedHeart] =  useState(false);

    // onLikedMusic = () =>{
    //     const selected = musics.find((music) => music.id === selectedId);
    //     console.log(selected);
    //     if(selected.isliked){
    //         setselectedHeart('')
    //     } else{
    //         setselectedHeart('heart-liked')
    //     }
    //  };
  return (
    <div className="leftside">
        <div className="info d-flex flex-column justify-content-start">
            <h1>Most popular</h1>

            <p>92 songs</p>
        </div>

        <div className="button-warpper">
            {musics.map((music) => (
                <div className="music-preview" key={music.id}>
                    <div className="d-grid gap-2 music-list-wrapper">
                        <button className="btn btn-light music-list row d-flex justify-content-center align-items-center rounded-4" type="button" onClick={()=>onSelectMuics(music.id)}>
                            <div className="col-1">
                                <h4>{music.id}</h4>
                            </div>

                            <div className="col-2">
                                <img src={music.image} className="music-pic" alt='disc-thumbnail'/>
                            </div>

                            <div className="col-3 d-flex align-items-center">
                                <span className="name-icon"> 
                                {
                                    selectedId === music.id
                                    ? <i className="fa-solid fa-volume-high volume-icon"></i>
                                    : <i className="fa-solid fa-caret-right"></i>   
                                }
                                </span>

                                <b>{music.title}</b>
                            </div>

                            <div className="col-3">
                                <p>{music.arttist}</p>
                            </div>

                            <div className="col-2">
                                <p>{music.totalTime}</p>
                            </div>

                            <div className="col-1">
                                <i className={`fa-solid fa-heart ${selectedHeart}`}  onClick={() => onLikedMusic(music.id)}></i>
                            </div>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default List;