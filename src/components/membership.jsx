import { useState } from "react";
import React from "react";
import image from "../images/logo-background.png"

const membership=()=>{
    const[name, setname]= useState('')
    const[email, setemail]= useState('')
    const[phonenumber, setphonenumber]= useState('')
    const [address, setaddress] = useState('')
    const[gender, setgender]= useState('no gender')
    const[state, setstate]= useState('no state')
    const [country, setcountry]= useState('')
    const [is_nigerian, setis_nigerian]= useState(false)
    const [error, seterror] = useState({})
    const [successmessage, setsuccessmessage] = useState('')

    const genders = [
      "Male",
      "Female"
    ]

    const states = [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
        "Federal Capital Territory (FCT)",
      ];
      
      const handlestate =(e)=>{
        const newvalue= e.target.value;
     setstate(newvalue);
      }

      
      const handlegender=(e)=>{
        const newvalue= e.target.value;
       setgender(newvalue);
      }
      const handlecountry=(e)=>{
           const newvalue= e.target.value;
           setcountry(newvalue)
          
           if(newvalue == "nigeria" || newvalue == "Nigeria"){
            setis_nigerian(true);
            console.log('true')
           }else{
            setis_nigerian(false)
           }
      }

      const handlesubmit=(e)=>{
       e.preventDefault()

    
const formdata = {name,email,phonenumber,address,gender,country,state,is_nigerian};

        fetch('http://127.0.0.1:8000/api/trader/', {
          method:'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata)
        }).then(res=>{
          if(!res.ok){
             return res.json().then(data=>{
          seterror(data)
         
        })
          }else if(res.ok){
            return res.json().then(data=>{
              seterror({})
              setsuccessmessage(data.message)
              setemail('');
              setname('');
              setaddress('')
              setphonenumber('');
              setstate('');
              setgender('');
              setcountry('');
              setis_nigerian(false);
            })
          }

       
          setemail('');
          setname('');
          setphonenumber('');
          setstate('');
          setgender('');
          setcountry('');
          setis_nigerian(false);

        }).catch(error=>{
            setsuccessmessage(error)
        })
      

       };


   
       return (
        <div className="bg-gray-200 w-full mb-[-50px]">
          <div className="grid md:grid-cols-2 gap-10 px-4 py-4 space-x-3">
            
            <div className="flex flex-col gap-5 justify-center px-3 py-3 h-screen">
      
    
   <div className="grid grid-cols-1 gap-5">
        {/* Placeholder for Benefits of Being a Member */}
        {/* <div className="bg-gray-100 p-4 rounded-md h-[650px] md:h-screen items-center justify-center">
          <h3 className="text-3xl font-semibold  text-center text-green-600 mb-8">Benefits of Being a Member:</h3>
          <ul className="list-disc pl-6 text-center text-[20px] sm:mb-10 lg:mb-10 md:">
          <li className="mb-3 text-center py-3 px-3 m-auto font-semibold">To protect and promote the rights of Traders from expliotations and multiple taxations</li>
            <li className="mb-3 text-center py-3 px-3 m-auto font-semibold">Monitor the progress of the apprentice to ensure that the contracttual agreement reached is upheld </li>
            <li className="mb-3 text-center py-3 px-3 m-auto font-semibold">To take apprenticeship from mini skilled to macro skill worker</li>
            <li className="mb-3 text-center py-3 px-3 m-auto font-semibold">liase with law maker to support bills that promote trading </li>
            <li className="mb-3 text-center py-3 px-3 m-auto font-semibold">We give legal Advice and services  </li>
            
           
          



          </ul>
        </div> */}
        </div>
        </div>
      
            <div className="flex flex-col gap-5 justify-center px-3 py-3">
              <h2 className="text-[#1a5d1a] text-3xl uppercase text-center md:text-4xl sm:text-2xl">
                Be a Member
              </h2>
              <p className="text-center px-2 py-3 font-mono font-bold text-[20px]">
                Become a member and gain access to the benefits of TRIWA
              </p>
              <form onSubmit={handlesubmit} className="flex flex-col gap-3 justify-center px-3 py-3">
                <label htmlFor="name" className="font-semibold">
                  Full Name
                </label>
                <input
                  name="name"
                  value={name}
                  onChange={e => setname(e.target.value)}
                  type="text"
                  placeholder="Your full name"
                  className="p-3 rounded-md border-2 border-gray-400"
                />
                {error.name && <p className="text-red-600 font-mono">{error.name}</p>}
      
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  name="email"
                  value={email}
                  onChange={e => setemail(e.target.value)}
                  type="email"
                  className="p-3 rounded-md border-2 border-gray-400"
                  placeholder="Your email"
                />
                {error.email && <p className="text-red-600 font-mono">{error.email}</p>}
      
                <label htmlFor="phonenumber" className="font-semibold">
                  Phone Number
                </label>
                <input
                  name="phonenumber"
                  value={phonenumber}
                  onChange={e => setphonenumber(e.target.value)}
                  type="text"
                  className="p-3 rounded-md border-2 border-gray-400"
                  placeholder="Your phone number"
                />
                {error.phonenumber && <p className="text-red-600 font-mono">{error.phonenumber}</p>}
      
                <label htmlFor="address" className="font-semibold">
                  Address
                </label>
                <input
                  name="address"
                  value={address}
                  onChange={e => setaddress(e.target.value)}
                  type="text"
                  className="p-3 rounded-md border-2 border-gray-400"
                  placeholder="Your address"
                />
                {error.address && <p className="text-red-600 font-mono">{error.address}</p>}
      
                <label htmlFor="gender" className="font-semibold">
                  Gender
                </label>
                <select
                  value={gender}
                  className="p-3 rounded-md border-2 border-gray-400"
                  onChange={handlegender}
                >
                  <option value="genders">Select</option>
                  {genders.map((gender, index) => (
                    <option key={index} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
                {error.gender && <p className="text-red-600 font-mono">{error.gender}</p>}
      
                <label htmlFor="country" className="font-semibold">
                  Country
                </label>
                <input
                  name="country"
                  value={country}
                  onChange={handlecountry}
                  type="text"
                  className="p-3 rounded-md border-2 border-gray-400"
                  placeholder="Your country"
                />
                {error.country && <p className="text-red-600 font-mono">{error.country}</p>}
      
                {is_nigerian && (
                  <div className="flex flex-col gap-3 justify-center px-3 py-3">
                    <label htmlFor="state" className="font-semibold">
                      State
                    </label>
                    <select
                      name="state"
                      className="p-3 rounded-md border-2 border-gray-400"
                      value={state}
                      onChange={handlestate}
                    >
                      <option value="states">Select a state</option>
                      {states.map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                    {error.state && <p className="text-red-600 font-mono">{error.state}</p>}
                  </div>
                )}
      
                <p className="text-green-600 font-mono p px-10">{successmessage}</p>
                <button
                disabled
                  type="submit"
                  className="w-[300px] mx-auto p-4 bg-[#00df9a] text-white py-5 px-5 rounded-md hover:bg-[#00df98de] focus:outline-none"
                >
                  Become a Member
                </button>
              </form>
            </div>
          </div>
        </div>
      );
      
      
};

export default membership;