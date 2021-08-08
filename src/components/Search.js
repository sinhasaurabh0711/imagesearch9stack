
import axios from 'axios';
import React,{Component} from 'react';

import ImageResults from './ImageResults';
class Search extends Component{
    state={
        searchText:'',
        apiUrl:'https://pixabay.com/api',
        apiKey:'22841036-be114b31ff6ef688286da22a3',
        images:[]
    };
    onTextChange=(e)=>{
        const val=e.target.value;
        this.setState({[e.target.name]:val},()=>{
            if(val==='')
            {
                this.setState({images:[]});
            }
            else{
            axios
            .get(
                `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                    this.state.searchText
                }&image_type=photo&safesearch=true&page=1&per_page=5`
            )
            .then(res=>this.setState({images:res.data.hits}))
            .catch(err=>console.log(err));
            }
        });
    };
    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" 
            style=
            {{backgroundColor:'white',
              textAlign:'center',
            
            color:'black',
            display:'block',
           
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:100,
            marginBottom:100,
            
            
            fontSize:30,
            borderTopStyle:"hidden",
            borderRightStyle:"hidden",
            borderLeftStyle:"hidden",
            outline:"none",
            borderBottomStyle:"groove",

        
        }}
            
        placeholder="Search for images"
        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
             />
<br />
{this.state.images.length>0?(<ImageResults images={this.state.images}/>):null}
            </div>

        )
    }
}


export default Search