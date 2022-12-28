import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import PostRequest from './PostRequest';
import HealthLink from './HealthLink';

const style = {
    background :'#e9f7f1',
    fontFamily: 'Georgia',
    botBubbleColor: '#000000',
    botFontColor: '#fff',
    userBubbleColor: '#e3bc52',
    

};
const ChatSteps = [
        {
            id: 'intro',
            message: 'Hello.',
            trigger: 'intro2',
        },
         {
                id: 'intro2',
                message: 'How can I help you?',
                trigger: 'patientchoice',
            },
         {
                    id: 'patientchoice',
                    options:[
                {value:'request',label: "Submit Patient Request",trigger:"request-name"},
                {value:'info',label: "Health Information", trigger:"healthguide"},
                ]
        },

    //for health information
        {
            id:'healthguide',
            message: 'What do you want to learn about?',
            trigger:"healthtopics",
        },
        {
            id:'healthtopics',
              options:[
                {value:'covid',label: "COVID-19",trigger:"covid"},
                {value:'strep',label: "Strep Throat", trigger:"strep"},
                ],
            
        },

        {
            id: 'covid',
            message: 'Choose a topic:',
            trigger:'coviddetails',
          },
          {
            id: 'coviddetails',
            options:[
                {value:'covidsymptoms',label: "Symptoms",trigger:"covidsymptomslink"},
                {value:'covidtreatment',label: "Treatment", trigger:"covidcureslink"},
                ],
          },
          {
            id: 'covidsymptomslink',
            asMessage:true,
            component: <HealthLink />,
            metadata:{
                link:'https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html',
                label: 'Link to COVID-19 Symptoms'
            },
           
            trigger:'covidsymptoms'
          },

          {
            id: 'covidsymptoms',
            message:'Here are a few common symptoms: cough, fever or chills, fatigue',
            end:true
          },
          

        
         {
          id: 'covidcureslink',
          asMessage:true,
          component: <HealthLink />,
          metadata:{
              link:'https://www.cdc.gov/coronavirus/2019-ncov/your-health/treatments-for-severe-illness.html',
              label: 'Link to COVID-19 Treatment'
          },
         
          trigger:'covidcures'
        },

        {
          id: 'covidcures',
          message:'Here are a few common treament methods: antiviral treatment',
          end:true
        },
          
          {
            id: 'strep',
            message: 'Choose a topic:',
            trigger:'strepdetails',
        },
        {
          id: 'strepdetails',
          options:[
              {value:'strepsymptoms',label: "Symptoms",trigger:"strepsymptomslink"},
              {value:'streptreatment',label: "Treatment", trigger:"strepcureslink"},
              ],
        },
        {
          id: 'strepsymptomslink',
          asMessage:true,
          component: <HealthLink />,
          metadata:{
              link:'https://www.cdc.gov/groupastrep/diseases-public/strep-throat.html',
              label: 'Link to Strep Throat Symptoms'
          },
         
          trigger:'strepsymptoms'
        },

        {
          id: 'strepsymptoms',
          message:'Here are a few common symptoms: fever, pain when swallowing, sore throat that can start very quickly',
          end:true
        },
        

      
       {
        id: 'strepcureslink',
        asMessage:true,
        component: <HealthLink />,
        metadata:{
            link:'https://www.webmd.com/oral-health/understanding-strep-throat-treatment',
            label: 'Link to Strep Throat Treatment'
        },
       
        trigger:'strepcures'
      },

      {
        id: 'strepcures',
        message:'Here are a few common treament methods: antibiotics, rest, over-the-counter medicines',
        end:true
      },
        

          //for a patient request
        {
            id: 'request-name',
            message: 'Please enter your legal name:',
            trigger: 'patientname'
          },{
    
            id: 'patientname',
            user: true,
            validator: (value)=> {
                if(/^[A-Za-z][A-Za-z'-]+([ A-Za-z][A-Za-z'-]+)*/.test(value)){
                    return true;
                }
                else{
                    return 'Please enter valid name.';
                }
            },
            trigger: 'welcome-name',
          },
          {
            id: 'welcome-name',
            message: "Welcome {previousValue}. Let's create your request",
            trigger: 'request-email',
          },{
                id:'request-email',
                message: "Please enter your email:",
                trigger:"patientemail",
          },
          {
            id: 'patientemail',
            user:true,
            validator: (value) => {
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
                    return true;
                }
                else{
                    return 'Please enter a valid email';
                }
            },
            trigger:'request-phone',
          },
          {
              id:'request-phone',
              message:'Please enter your phone number:(###-###-#####)',
              trigger:'patientphone',
          },
          {
              id:'patientphone',
              user:true,
              validator: (value) => {
                  if(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(value)){
                      return true;
                  }
                  else{
                      return 'Please enter valid phone number (###-###-#####)'
                  }
              },
              trigger:'request-symptoms',

          },
          {
            id:'request-symptoms',
            message:'What are your symptoms?',
            trigger:'symptoms',
          },
          {
              id:'symptoms',
            options:[
                {value:'cough',label:'Cough',trigger:'send-request'},
                {value:'fever',label:'Fever',trigger:'send-request'},
                {value:'headache',label:'Headache',trigger:'send-request'},

            ]
          },
        
          {
              id:'send-request',
              component: <PostRequest />,
              asMessage:true,
              end: true
          }

    
    ];
class PatientForm extends Component{
    render(){
        return(
            <ThemeProvider theme={style}>
             <ChatBot steps={ChatSteps} />
            </ThemeProvider>
        )  
    }
}

export default PatientForm;