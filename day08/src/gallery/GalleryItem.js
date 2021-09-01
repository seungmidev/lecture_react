import React from 'react';
import styled from 'styled-components'

const ImageBox = styled.article`
    margin-bottom:35px; box-shadow:2px 2px 5px #dcdcdc; border:1px solid #efefef;
    img {width:100%;}
    h3 {font-size:22px; margin:15px; color:skyblue;}
    ul {
        margin:15px;
        li {margin-bottom:5px;}
    }
    p {
        margin:15px;
        span {border-radius:20px; padding:5px 10px; margin-right:10px; display:inline-block; background-color:#efefef;}
    }
`

const GalleryItem = ({item}) => {
    const {views, downloads, likes, tags, webformatURL, user} = item
    const taglist = tags.split(',')

    return (
        <ImageBox>
            <img src={webformatURL} alt={user} />
            <h3>{user}</h3>
            <ul>
                <li>조회수: {views}</li>
                <li>다운로드: {downloads}</li>
                <li>좋아요: {likes}</li>
            </ul>
            <p>
                {
                    taglist.map((tag, index) => <span key={index}>#{tag}</span>)    
                }
            </p>
        </ImageBox>
    );
};

export default GalleryItem;