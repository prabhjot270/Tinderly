import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveProfile } from './utils/profileSlice';

const EditProfile = () => {
    const dispatch=useDispatch()
    const storedProfile=useSelector((state)=>state.profile.data) ;

    const [formData ,setFormData]=useState( storedProfile ||{
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    country: "",
    bio: "",
    relationshipStatus: "",
    })

const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prev)=>({
        ...prev,
        [name]:value,
    }));
};

const handleBtnClick=(e)=>{
    //prevent default behaviour which is refresh
    e.preventDefault();
    //dispatch an action to save profile data to store
     dispatch(saveProfile(formData));
}
  
  return (
    <div className='relative text-white z-10 flex items-center justify-center min-h-screen'>
        <form onSubmit={handleBtnClick}>
       <fieldset className='fieldset rounded-box w-md border p-6 shadow-lg  backdrop-blur-lg'>
        <h2 className='text-3xl font-bold text-center mb-4 btn text-black bg-transparent'>Profile Details</h2>
        <label className='label text-black text-lg'>First Name</label>
        <input name="firstName" className='input mt-0 w-md' type='text' placeholder='First Name' value={formData.firstName} onChange={handleChange}></input>

        <label className='label text-black text-lg'>Last Name</label>
        <input name="lastName" className='input mt-0 w-md'type='text' placeholder='Last Name' value={formData.lastName} onChange={handleChange}></input>

        <label className='label text-black text-lg'>Age</label>
        <input name="age" className='input mt-0 w-md'type='text' placeholder='Age' value={formData.age} onChange={handleChange}></input>

        <label className='label text-black text-lg'>Gender</label>
        <input name="gender" className='input mt-0 w-md'type='text' placeholder='Gender' value={formData.gender} onChange={handleChange}></input>

        <label className='label text-black text-lg'>Relationship Status</label>
        <input name="relationshipStatus" className='input mt-0 w-md'type='text' placeholder='Status' value={formData.relationshipStatus} onChange={handleChange}></input>

        <label className='label text-black text-lg'>Country</label>
        <input name="country" className='input mt-0 w-md'type='text' placeholder='Country' value={formData.country} onChange={handleChange}></input>

        <label className='label text-black text-lg'>Bio</label>
        <input name="bio" className='input mt-0 w-md'type='text' placeholder='Bio' value={formData.bio} onChange={handleChange}></input>
        <button type="submit" className='bg-gradient-to-r from-pink-400 to-red-400 p-2 w-xs ml-15 mt-5 rounded-md cursor-pointer'>Save Changes</button>
       </fieldset>
     </form>
    </div>
  )
}

export default EditProfile
