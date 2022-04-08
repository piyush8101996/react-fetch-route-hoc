const ImageGallery = ({images}) => {

    return (
        <div>
            {images.map((image, index)=>{
                return (
                    <img 
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        width={200}
                        height={200} />
                );
            })}
        </div>
    );
};

export default ImageGallery;