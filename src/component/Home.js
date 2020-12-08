import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartAction'

class Home extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){

            let itemList = this.props.items.map(item=> {
                return(
                    <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.name}/>
                            <span className="card-title">{item.name}</span>
                            <div className="card-content">            
                            <p><b>Price: {item.price}$</b></p>
                        </div>
                            <button to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></button>
                        </div>

                        
                 </div>
                )
            }) 
        
            return(
                <div className="container">
                    <h3 className="center">Our items</h3>
                    <div className="box">
                        {itemList}
                    </div>
                </div>
            );
            
        

    }
        
}    
;

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }

  const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);