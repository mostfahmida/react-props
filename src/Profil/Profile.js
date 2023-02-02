import React from 'react'


const Profile = ({FullName,bio,profession,children}) => {
  const handlename = () => {
    alert(FullName)
  }
  return (
    <div className='wrapper'>
            <h1>{FullName}</h1>
            <h2>{bio}</h2>
            <h3>{profession}</h3>
            {children}  
            <button onClick={handlename}>PRESS</button>
        
    </div>
  )
}

export default Profile

Profile.defaultProps = {
  FullName : "user" ,
  bio : "user" ,
  profession : "battal"

}