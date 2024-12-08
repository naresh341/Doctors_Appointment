import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/front/assets'
import RelatedDoctors from '../Component/RelatedDoctors'

const Appointment = () => {
  const {docId}=useParams()
  const{doctors,currencySymbol}=useContext(AppContext)
  const days=['SUN','MON','TUE','WED','THUR','FRI','SAT']

  const [docinfo, setDocinfo] = useState(null)
  const [slot, setSlot] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [time, setTime] = useState("")

  const fetchDocInfo=async()=>{
    const docinfo=doctors.find(doc=>doc._id === docId )
    setDocinfo(docinfo)
    console.log(docinfo)
  }

  const availableSlot=async()=>{
    setSlot([])

    let today=new Date()
    for(let i=0;i<7 ;i++){
      let currDate=new Date(today)
      currDate.setDate(today.getDate()+i)

      // For Time
      let endTime=new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if(today.getDate()=== currDate.getDate()){
        currDate.setHours(currDate.getHours()>10? currDate.getHours()+1:10)
        currDate.setMinutes(currDate.getMinutes()>30?30:0)

      }
      else{
        currDate.setHours(10)
        currDate.setMinutes(0)
      }
      let timeslot=[]
      while(currDate<endTime){
        let formattedTime=currDate.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})
            timeslot.push({
              datetime:new Date(currDate),
              time:formattedTime
            })
            // increase by 30 minutes
            currDate.setMinutes(currDate.getMinutes()+30)
      }
      setSlot(prev=>([...prev,timeslot]))
    }


  }
  useEffect(() => {
    fetchDocInfo()
  }, [doctors,docId])

  useEffect(() => {
    availableSlot()
  }, [docinfo])
  
  useEffect(() => {
    console.log(slot)
  }, [slot])

  
  return docinfo && ( 
    <>
    <div className='caret-transparent'>
            {/* -----------------Doctors Details -------------- */}
            <div className='flex gap-4 flex-col sm:flex-row'>
              <div >
                <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docinfo.image} alt="image" />
              </div>

              <div className='flex-1 border border-gray-400  rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px]  sm:mt-0 '>
                  {/* -----------Right side--------- */}

                  <p className='flex items-center gap-2 text-2xl font-medium text-gray-900  '>{docinfo.name}
                     <img className='w-5' src={assets.verified_icon} alt="" /></p>
                    <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
                      <p>{docinfo.degree} - {docinfo.speciality}</p>
                      <button className='py-0.5 px-2 border text-xs rounded-full'>{docinfo.experience}</button>
                    </div>
                    {/* -------- about ----------------- */}
                    <div >
                      <p className='flex items-center gap-1 text-sm font-medium text-gray-500 mt-3'>About <img src={assets.info_icon} alt="info_icon" /></p>
                      <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docinfo.about}</p>
                    </div>
                    <p className='text-gray-500 font-medium mt-4'>
                    Appointment fee: <span className='text-gray-600'>{currencySymbol}{docinfo.fees}</span>
                    </p>
              </div>
            </div>

            {/* ------------BOOKING------------- */}
            <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
              <p>Booking Slots</p>
              <div className='flex gap-3 items-center w-full overflow-hidden'>
                {
                  slot.length && slot.map((item, index) =>(
                    <div key={index} onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index?"bg-primary text-white":"border border-gray-200"}`}>
                      <p>{item[0] && days[item[0].datetime.getDay()]}</p>
                      <p>{item[0] && item[0].datetime.getDate()}</p>
                    </div>
                  ) )
                }
              </div>
                  <div className='flex item-center gap-3 w-full overflow-x-scroll mt-4 '>
                    {slot.length && slot[slotIndex].map((item,index)=>(
                        <p onClick={()=>setTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===time?"bg-primary text-white":"border border-gray-300 text-gray-400"} `} key={index}>
                          {item.time.toLowerCase()}
                        </p>
                    )) }
                  </div>
                  <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an Appointment</button>
            </div>

            <RelatedDoctors docId={docId} speciality={docinfo.speciality}></RelatedDoctors>
    </div>
    </>
  )
}

export default Appointment