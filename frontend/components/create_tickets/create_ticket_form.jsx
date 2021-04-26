import React from 'react'

class CreateTicketForm extends React.Component{

  constructor(props){
    super(props);

    this.state={
      paid: true,
      maxQuantity: '',
      name:'',
      price: '',
      disabled: false
    }
  }

  handleInputChange(field){
    return (e)=>{
      this.setState({[field]: e.target.value});
    };
  }
  handleRadioChange(field){
    return (e)=>{
      if(field === 'payment'){
        this.setState({disabled:true}); 
        if(e.currentTarget.value === "FREE"){
          this.state.price = '';
          this.setState({disabled:true});
        }
      }
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(){

  }

  render(){

    return(
      <div id="create-ticket-form" className="create-form">
        <form id="create-event-info-form" className="create-info-form" onSubmit={this.handleSubmit}>
        
        <section className="info-section">
            <h1 className="create-header"><i className="far fa-edit create-event-form-icons"></i>Add tickets</h1>
            <p className="create-description">Create a ticket for your event. Users will be able to purchase tickets until the event ends.</p>

          <label className='large-input-label'><p>Name</p>
            <input className="large-input" onChange={this.handleInputChange('name')} value={this.state.name}/>
          </label>  
          {/* {titleErr} */}
          <label className='large-input-label'><p>Quantity</p>
          <input className="large-input" type="number" min='0' max='10000' onChange={this.handleInputChange('maxQuantity')} value={this.state.maxQuantity}/>
          </label>
          <div id="create-event-radio-buttons" className="radio-buttons">
            <input type="radio" id="paid" name="paid" value='true' checked={this.state.paid === 'true'}
                  onChange={this.handleRadioChange('paid')} />
            <label htmlFor="paid">Paid</label>
            <input type="radio" id="free" name="paid" value='false' checked={this.state.paid === 'false'} 
                  onChange={this.handleRadioChange('paid')} />
            <label htmlFor="free">Free</label>
          </div>
          <label className='large-input-label'><p>Price</p>
          <input className="large-input"  onChange={this.handleInputChange('price')} 
              value={this.state.price} disabled={'false' === this.state.paid}
                placeholder='$ 0.00'
                pattern="^\$?\d+(,\d{3})*(\.\d{2})?$"/>
          </label>
          {/* {organizerErr} */}
        </section>

        
        <div id="form-buttons">
          <button className="form-discard-button" type="reset">Discard</button>
          <button className="form-submit-button">Save & Continue</button>
        </div>
        </form>
      </div>
    )
  }


};

export default CreateTicketForm;