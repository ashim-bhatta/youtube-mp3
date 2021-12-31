import React, { useEffect, useState } from 'react'
import './style.scss'

const ChannelCard = ({data}) => {
  const [image, setImage] = useState('')
console.log(data);

  useEffect(() => {
    setImage(data?.thumbnails[1]?.url)
  }, [data])
  
  return(
    <div className="channel-card center">
      <div className="channel-card__image-container">
        <img src={image} alt={`${data?.title} image`} onError={() => setImage('https://cdn.dribbble.com/users/35810/screenshots/12863854/media/cc38420c55cc41f4589b403c8b8f8ac5.jpg?compress=1&resize=1000x750')}/>
      </div>

      <h3 className="channel-card__artist-name">{ data?.title }</h3>
      <p className="channel-card__subscribe-count">{ data?.subscribers?.split(' ')?.[0] }</p>
      <div className="btn center">Follow</div>
    </div>
  )
}


export default ChannelCard