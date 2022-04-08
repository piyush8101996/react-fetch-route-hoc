export const background = (Component, bgColor="lightblue") => {
    
    const styleObj = {
        backgroundColor: bgColor, 
        border: '2px solid black',
        padding: '5px',
        margin: '5px',
        display: 'inline-block'
    };

    return (props) => {
        
        return (
            <div style={styleObj}>
                <Component {...props}/>
            </div>
        );
    };

};