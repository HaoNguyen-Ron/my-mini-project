import React, { useState } from 'react';
import List from './list';
import Play from './play';

const musics = [
  {
      id:1,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title: 'Voice of No Return',
      arttist:'Keiichi Okabe',
      totalTime:'2:53',
      file: require('../../Asset/Musics/VoiceOfNoReturnNormal.mp3'),
      isliked: false
  },
  {
      id:2,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Amusement Park',
      arttist:'Keigo Hoashi',
      totalTime:'6:19',
      file: require('../../Asset/Musics/AmusementPark.mp3'),
      isliked: false
  },
  {
      id:3,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Birth of A Wish',
      arttist:'Keiichi Okabe',
      totalTime:'4:40',
      file: require('../../Asset/Musics/BirthOfAWish.mp3'),
      isliked: false
  },
  {
      id:4,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Blissful Death',
      arttist:'Keiichi Okabe',
      totalTime:'2:36',
      file: require('../../Asset/Musics/BlissfulDeath.mp3'),
      isliked: false
  },
  {
      id:5,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'City Ruin Ray of Light',
      arttist:'Keiichi Okabe',
      totalTime:'6:22',
      file: require('../../Asset/Musics/CityRuinsRaysOfLight.mp3'),
      isliked: false
  },
  {
      id:6,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Copied City',
      arttist:'Keigo Hoashi',
      totalTime:'4:00',
      file: require('../../Asset/Musics/CopiedCity.mp3'),
      isliked: false
  },
  {
      id:7,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Peacefull Sleep',
      arttist:'Keiichi Okabe',
      totalTime:'6:52',
      file: require('../../Asset/Musics/PeacefulSleep.mp3'),
      isliked: false
  },
  {
      id:8,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Song of The Ancients',
      arttist:'Keiichi Okabe',
      totalTime:'5:10',
      file: require('../../Asset/Musics/SongOfTheAncientsAtonement.mp3'),
      isliked: false
  },
  {
      id:9,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Vague Hope',
      arttist:'Keigo Hoashi',
      totalTime:'3:36',
      file: require('../../Asset/Musics/VagueHopeColdRain.mp3'),
      isliked: false
  },
  {
      id:10,
      image: require('../../Asset/DiscThumbnail.jpg'),
      title:'Voice of No Return 2',
      arttist:'Keiichi Okabe',
      totalTime:'3:52',
      file:require('../../Asset/Musics/VoiceOfNoReturnGuitar.mp3'),
      isliked: false
      
  }
]


function PlayList(props) {
    const [selectedMusic, setselectedMusic] = useState(musics[0]);

    const onSelectMuics = (selectedId) =>{
        const selected = musics.find((music) => music.id === selectedId);
        setselectedMusic(selected);
    };

    const onNext = () =>{
        const currentIndexMusic = musics.findIndex((music) => music.id === selectedMusic.id)
        if(currentIndexMusic === musics.length -1){
            setselectedMusic(musics[0]);        
        } else{
            setselectedMusic(musics[currentIndexMusic + 1])
        }
    };

    const onPrev = () =>{
        const currentIndexMusic = musics.findIndex((music) => music.id === selectedMusic.id)
        if(currentIndexMusic === 0){
            setselectedMusic(musics[musics.length -1]);        
        } else{
            setselectedMusic(musics[currentIndexMusic - 1])
        }
    };

    const [selectedHeart, setselectedHeart] =  useState(false);

    const onLikedMusic = (selectedHeart) =>{
        const selected = musics.find((music) => music.id === selectedHeart);
        console.log(selected);
        if(selected.isliked===true){
            setselectedHeart('')
        } else{
            setselectedHeart('heart-liked')
        }
     };
  return (
    <div className="container-xll">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-8">
                <List 
                    musics={musics}
                    onSelectMuics={onSelectMuics}
                    selectedId={selectedMusic.id}
                    onLikedMusic={onLikedMusic}
                    selectedHeart={selectedHeart}
                />
            </div>
            <div className="col-12 col-md-12 col-lg-4">
                <Play
                    title={selectedMusic.title} 
                    artist={selectedMusic.arttist} 
                    image={selectedMusic.image} 
                    file={selectedMusic.file}
                    onNext={onNext} 
                    onPrev={onPrev}
                    
                />
            </div>
        </div>
    </div>
  );
}

export default PlayList;