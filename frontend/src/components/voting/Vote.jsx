import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import styled from 'styled-components'
import "./vote.css"


const Vote = () => {
  const history = useHistory();
const [vote,setVote]  = useState('')


const SubmitVote = async(e)=>{
  e.preventDefault()
  const aadhar =  localStorage.getItem('aadhar')
  const password = localStorage.getItem('aadhar-password')
  const party = vote;
  if(vote === ""){
    alert('Please Select an option')
    history.push('/vote')
  }
  else{
    const res = await fetch('/voterecording' , { 
      method: 'POST',
      headers:{
          "Content-Type" : "application/json"
      },
      body:JSON.stringify({
          aadhar,password,party
      })
    })


        if(res.status===400){
            alert("Please login to vote")
            history.push('/signin')
        }
        if(res.status===500){
          alert("You have already voted. Can not vote again");
          history.push('/')
        }
        if(res.status===200){
            alert("Vote recorded successfully")
            history.push('/')
        }
  }
}


  return (
<>
<div className='body'>
<div className='text-center text-light'>
   <h3> Vote for a party</h3>  
    <h5>Note : You will only be allowed to vote once and will not be able to change your decision.</h5>
</div>
<div className='w-100 d-grid justify-content-center'>
    <form method='POST'>
<table className='table table-secondary table-hover w-100 text-center text-white'>
  <thead>
  <tr className='text-light'>
      <th>Party Symbol</th>
    <th>Party name</th>
    <th>Your Vote</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><img src="https://www.freepnglogos.com/uploads/bjp-logo-png/bjp-picture-png-logos-8.png" alt="" height={80} /></td>
    <td><label htmlFor="bjp" >BJP</label></td>
    <td><input className='radio form-check-input' type="radio" name="party" id="bjp" value="bjp" onClick={(e)=>setVote(e.target.value)}/></td>
  </tr>
  <tr>
    <td><img src="congress.png" alt="" height={80} /></td>
    <td><label htmlFor="congress">Congress</label> </td>
    <td><input className='radio form-check-input' type="radio" name="party" id="congress" value="congress" onClick={(e)=>setVote(e.target.value)}/></td>
  </tr>
  <tr>
    <td><img src="aap.png" alt="" height={80} /></td>
    <td><label htmlFor="aap">Aam Aadmi Party</label> </td>
    <td><input class="radio form-check-input" type='radio' name="party" id="aap" value="aap" onClick={(e)=>setVote(e.target.value)}/></td>
  </tr>
  <tr>
    <td><img src="inc.png" alt="" height={80} /></td>
    <td><label htmlFor="ncp">National Congress Party</label> </td>
    <td><input class="radio form-check-input" type='radio' name="party" id="ncp" value="ncp" onClick={(e)=>setVote(e.target.value)} /></td>
  </tr>
  <tr>
    <td><img src="inld.png" alt="" height={80} /></td>
    <td><label htmlFor="inld">Indian National Lok Dal</label> </td>
    <td><input class="radio form-check-input" type='radio' name="party" id="inld" value="inld" onClick={(e)=>setVote(e.target.value)}/></td>
  </tr>
  </tbody>
</table>

<div className='text-center my-5'><button className='btn btn-primary '  onClick={SubmitVote}>Vote</button></div>

    </form>
</div>

</div>
</>
  );
};

export default Vote;
// const Container = styled.div`
// height:79vh;
// width:100vw;`
// const Head = styled.div`
// width:100%;
// height:10%;
// margin-top:1rem;
// display:flex;
// justify-content:center;
// align-items:center;
// flex-direction:column;
// text-align:center;
// padding:0 1rem;
// @media all and (max-width:813px){
// height:20%;
// }

// @media all and (max-width:477px){
// font-size:0.9rem;
// }
// @media all and (max-width:349px){
// height:30%;
// font-size:0.9rem;
// }
// `
// const Note = styled.div`

// `
// const Main = styled.div`
// font-size:1.6rem;
// font-weight:bold;
// `
// const Parties = styled.div`
// width:100%;
// form{
// display:flex;
// justify-content:center;
// flex-direction: column;
// gap:3rem;
// align-items:center;
// width:100%;

// button{
//     width:9rem;
//     height:3rem;
//     background:rgba(0,0,0,0.2);
//     border-radius:4px;
//     cursor:pointer;
//     border:none;
//     outline:none;
    
// }

// }


// table {
//     font-family: arial, sans-serif;
//     width: 70%;
//   }
  
//   td, th {
//     border: 1px solid #dddddd;
//     text-align: left;
//     padding:0px 1rem;

//     img{
//         width:4.3rem;
//         height:4rem;
//     }
//   }
  


// `