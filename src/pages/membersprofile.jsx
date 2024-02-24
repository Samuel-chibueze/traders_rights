import React from 'react';
import { useEffect, useState } from "react";



const membersprofile = () => {
  const [data, setdata] = useState(undefined)
  const [isloading, setisloading] = useState(true)
  useEffect(() => {
    // url.then(res=> res.json() ).then(data=>{
    //         usedata(data); 
    //     })
    setTimeout(() => {
      const handleload = async () => {

        const response = await fetch('http://127.0.0.1:8000/api/view/');
        const data = await response.json();
        setisloading(false)
        setdata(data)
        console.log(data)



      }
      handleload()
    }, 3000);
  }, []);




  return <div className={isloading ? "h-screen" : "h-auto"}>
    <div class="max-w-4xl mx-auto p-8">
      <h1 class="text-2xl font-semibold mb-4">Data Table Example</h1>
      <table class="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
        <thead class="bg-gray-100">
          <tr class="text-gray-600 text-left">
            <th class="py-3 px-4 font-semibold">id</th>
            <th class="py-3 px-4 font-semibold">name</th>
            <th class="py-3 px-4 font-semibold">email</th>
            <th class="py-3 px-4 font-semibold">phonenumber</th>
            <th class="py-3 px-4 font-semibold">address</th>
            <th class="py-3 px-4 font-semibold">gender</th>
            <th class="py-3 px-4 font-semibold">country</th>
            <th class="py-3 px-4 font-semibold">state</th>
            <th class="py-3 px-4 font-semibold">nigerian</th>
            <th class="py-3 px-4 font-semibold">joined at </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-300">
          {isloading ? <h1 className='text-center text-xl text-red-700 uppercase m-[50px] '>loading..</h1> : data.map((item) => (
            <tr class="text-gray-700" key={item.id}>
              <td class="py-3 px-4 text-xl">{item.id}</td>
              <td class="py-3 px-4">{item.name}</td>
              <td class="py-3 px-4">{item.email}3</td>
              <td class="py-3 px-4">{item.phonenumber}</td>
              <td class="py-3 px-4">{item.address}</td>
              <td class="py-3 px-4">{item.gender}</td>
              <td class="py-3 px-4">{item.country}</td>
              <td class="py-3 px-4">{item.state}</td>
              <td class="py-3 px-4">{item.is_nigerian ? "Nigerian " : "Not a nigerian"}</td>
              <td class="py-3 px-4">{item.created_at}</td>

            </tr>
          ))}
        </tbody>
      </table>


    </div>
  </div>;
}


export default membersprofile;