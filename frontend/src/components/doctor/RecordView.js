import axios from 'axios';
import React, { Component } from 'react';
import UpdateLink from "./UpdateLink"



class RecordView extends Component{

    constructor(props){
        super(props);
        this.state = {
            recordsList: []
        }
    }
    

componentDidMount(){
   
    //send the HTTP GET request
    this.refreshRecords();
    
}

refreshRecords = () => {
    axios.get("/api/chats/")
    .then((res) => this.setState({recordsList: res.data }));
    
};

handleDelete = (id) => {
    axios.delete('/api/chats/'+id+'/')
    .then((res) => this.refreshRecords());
}

renderRecords = () => {

    const items = this.state.recordsList;
  

    return items.map((item) => (
        <tr key = {item.id}>
        <td>{item.id}</td>
        <td>{item.patient_id}</td>
        <td>{item.patient_name}</td>
        <td>{item.email}</td>
        <td>{item.phone_num}</td>
        <td>{item.symptoms}</td>
        <td>{item.diagnosis}</td>
        <td> <UpdateLink to ={item.id} /></td>
        <td><input type="image" alt="delete" id="delete" src="https://img.icons8.com/color/512/delete-forever.png" onClick={() => this.handleDelete(item.id)} /></td>
        </tr>

        
    ));
};

 mySearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("patientrecords");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

render(){
    return(
        
        
        <div>
        
        <h1>Patient Records</h1><br></br>

        <table id="patientrecords">
        <tbody>
            <tr>
                <th>Record ID</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Email</th>
                <th>Phone #</th>
                <th>Symptoms</th>
                <th>Diagnosis</th>
                <th>Update/Edit</th>
                <th>Delete</th>

            </tr>
            {this.renderRecords()}
        </tbody>
        </table>
        </div>
       
        
        
    )
    }
};
export default RecordView;
