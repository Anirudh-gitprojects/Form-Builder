import React from "react"
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { Select ,MenuItem, InputLabel,Button} from '@mui/material';
import ComprehensionFormBuilder from "./Comprehension";
import ClozeForm from "./Close";
import CategorizeForm from "./Categorize";

function Home(){
    const [form, setForm] = React.useState('');


    function addCat(){
      setForm('Categorize');
      console.log(form)
    }
    
    function addCloze(){
      setForm('Cloze');
      console.log(form)
    }
    
    function addComp(){
      setForm('Comprehension');
      console.log(form)
    }
    const handleChange = (event) => {
      setForm(event.target.value);
      if(event.target.value==="Categorization"){
        return <CategorizeForm/>
      }
    };

  return (
    <>
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Form-Builder</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Build Customized Forms with Form-Builder. 
          </p>
        </div>
      
      </div>
    </div>
    <div className="mt-3 ">
     <Button variant="contained" onClick={addCat} style={{position:'relative',left:'600px',borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"}} className="bg-black-900">Categorization</Button>
    <Button variant="contained" onClick={addCloze} style={{position:'relative',left:'650px',borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"}}>Cloze</Button>
    <Button variant="contained" onClick={addComp} style={{position:'relative',left:'700px',borderRadius: 35,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"}}>Comprehension</Button></div>  <br/> <hr/>

    {form=="Categorize"? <CategorizeForm/> : null}
    
    {form=="Cloze"? <ClozeForm/> : null}
    
    {form=="Comprehension"? <ComprehensionFormBuilder/> : null}
  </>
    )
}

export default Home;