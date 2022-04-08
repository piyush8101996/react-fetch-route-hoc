import { useEffect, useState } from 'react';
import ImageGallery from '../components/ImageGallery/ImageGallery';

const UsersImages = () => {

    const [images, setImages] = useState([]);
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>(res.json()))
        .then((items) => {
            setData(items);
            // const imageList = items.map((item)=>({
            //     src:item.url,
            //     alt:item.title
            //  }));
            //  setImages(imageList);
        });
    },[]);

    useEffect(()=>{
        const imageList = data.map((item)=>({
                src:item.url,
                alt:item.title
            }));
            setImages(imageList);
    },[data]);

    return (
        <>
            <h1>Users Images Gallery</h1>
            <ImageGallery images={images}/>
        </>
    );
};

export default UsersImages;