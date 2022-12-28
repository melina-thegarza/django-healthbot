import axios from 'axios';
import React, { Component } from 'react';
import { flushSync } from 'react-dom';


let axiosConfig = {
    headers: {
        'Content-Type': 'application/json',
        "Vary": "Accept",
    }
  };
//get user input from the chatbot interaction
class PostRequest extends Component{
    constructor(props){
        super(props);
        const {steps} = this.props;
        const { patientname, patientemail,patientphone, symptoms} = steps;
        this.state = { 
            patientname,
             patientemail,
            patientphone,
             symptoms, 
             record: []
            };

    }


componentDidMount(){
    const patientRequest = {
        patient_name: this.state.patientname.value,
        email: this.state.patientemail.value,
        phone_num: this.state.patientphone.value,
        symptoms: this.state.symptoms.value

    };
    //send the HTTP POST, update the database
    axios.post('/api/chats/',patientRequest,axiosConfig)
    .then((res) => flushSync(() =>{
        this.setState({record: res.data}, this.createReceipt());
    }));
   


}
createReceipt=()=>{
    setTimeout(() => {
        console.log(this.state.record);
      }, 0);
   
}

createReceiptBody = () =>{
    const item = this.state.record;
    
    //const obj = JSON.parse(this.state.record);
    console.log( this.state.record)
    
   return (
                <div className="receipt">
                <li>Record ID: {item.id}</li>
                <li>Patient ID: {item.patient_id}</li>
                <li>Name: {item.patient_name}</li>
                <li>Email: {item.email}</li>
                <li>Phone Number: {item.phone_num}</li> 
                <li>Symptoms: {item.symptoms}</li>
                <li>Diagnosis: N/A</li>
                </div>
                
    );
};

render(){
    return(
        <div>Thank you for submitting a request. Below is your receipt
                {this.createReceiptBody()}
                  

        </div>
  
    )
    }
};
export default PostRequest;