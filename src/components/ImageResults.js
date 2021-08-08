import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ImageResults extends Component{
    state={
        open:false,
        currentImg:''
    }
    handleOpen=img=>{
        this.setState({open:true,currentImg:img})
    }
    handleClose=()=>{
        this.setState({open:false});
    }
    render()
    {
  
        const {images}=this.props

    
        
        return(
            <div>
                {  images.map(img=>(
                       
                        <img 
                        style={{
                            display:"block",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop:20,
                            
                        }}
                        src={img.webformatURL} alt="" />
                       
                    ))
                }
                </div>
        )
    }
}
ImageResults.propTypes={
    images:PropTypes.array.isRequired
}

export default ImageResults;