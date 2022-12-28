
import axios from 'axios';
import React, { Component } from 'react';
import { flushSync } from 'react-dom';


  class UpdateRecord extends Component {
    
   
        constructor(props){ 
            super(props);
            this.state = {
                record: [],
                id: window.location.pathname.split('/')[2],
                updatestautus: "",
                isSubmitted : false,

            };
            this.updateRecord = this.updateRecord.bind(this);
        
           
        }
        
    

        componentDidMount(){
           
            //get the record
            this.retrieveRecord();
            
        }
    
    retrieveRecord = () => {
        //const id = window.location.href.split('/')[1]
        axios.get("/api/chats/"+this.state.id)
       .then((res) => this.setState({record: res.data }));
        
    };

    updateRecord = (event) => {
        event.preventDefault();
        
        this.state.record.diagnosis =  event.target[5].value;
       axios.put("/api/chats/"+this.state.id+'/',this.state.record)
        .then((res) => flushSync(() =>{
            this.setState({updatestautus: res.status, isSubmitted:true },this.isSuccessful());
        }));
        


    };

    isSuccessful = () => {
      
        setTimeout(() => {
            console.log(this.state.updatestautus);
          }, 0);
       
        
        if(this.state.updatestautus!=='200'){
            flushSync (()=>{
                this.setState({isSubmitted: false})
        });
    };
    };
   

    displayRecord = () => {
        const item = this.state.record;

        return  (
          
        <form onSubmit={this.updateRecord}>
            
        <h5>Record {item.id}</h5> 
     
         Patient ID: <input type="textarea" id="patientid" name="patientid" value={item.patient_id}  readOnly></input><br></br>
         Patient Name: <input type="text" id="patientname" name="patientname" value={item.patient_name} readOnly></input><br></br>
         Email: <input type="text" id="email" name="email" value={item.email} readOnly></input><br></br>
         Phone #: <input type="text" id="phone" name="phone" value={item.phone_num} readOnly></input><br></br>
         Symptoms: <input type="text" id="symptoms" name="symptoms" value={item.symptoms} readOnly></input><br></br><br></br>
         Diagnosis: <input type="text" id="diagnosis" name="diagnosis" defaultValue={item.diagnosis} ></input>**<br></br><br></br>
        <button type="submit">Submit</button>
        </form>

       
         );
    };

  


    render(){
        
        return(
        <div className="update">
            <h1>Update Record</h1>
            {this.displayRecord()}<br></br>
            {this.state.isSubmitted === true &&
        <div className="success-bubble">
          Successful Submission!!
        </div>
      }
           
        </div>
    );
    }
};

export default UpdateRecord;