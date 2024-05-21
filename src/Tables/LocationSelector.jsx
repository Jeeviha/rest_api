import React, { useState } from 'react'

const LocationSelector = () => {
  const countries=[
    {id:1,name:"India"},
    {id:2,name:"Australia"},
    {id:3,name:"UAE"}
  ]
  const states=[
    {id:1,c_id:1,name:"Tamil Nadu"},
    {id:2,c_id:1,name:"Kerala"},
    {id:3,c_id:1,name:"Maharashtra"},
    {id:4,c_id:1,name:"Karnataka"},
    {id:5,c_id:1,name:"Andhra Pradesh"},
    {id:6,c_id:2,name:"New South Wales"},
    {id:7,c_id:2,name:"Victoria"},
    {id:8,c_id:2,name:"Queensland"},
    {id:9,c_id:2,name:"Western Australia"},
    {id:10,c_id:2,name:"South Australia"},
    {id:11,c_id:3,name:"Dubai"},
    {id:12,c_id:3,name:"Abu Dhabi"},
    {id:13,c_id:3,name:"Sharjah"},
    {id:14,c_id:3,name:"Ajman"},
    {id:15,c_id:3,name:"Fujairah"}
  ]
  const districts=[
    {id:1,s_id:1,name:"Chennai"},
    {id:2,s_id:1,name:"Coimbatore"},
    {id:3,s_id:1,name:"Madurai"},
    {id:4,s_id:2,name:"Thiruvananthapuram"},
    {id:5,s_id:2,name:"Ernakulam"},
    {id:6,s_id:2,name:"Kozhikode"},
    {id:7,s_id:3,name:"Mumbai City"},
    {id:8,s_id:3,name:"Pune"},
    {id:9,s_id:3,name:"Nagpur"},
    {id:10,s_id:4,name:"Bangalore"},
    {id:11,s_id:4,name:"Mysore"},
    {id:12,s_id:4,name:"Mangalore"},
    {id:13,s_id:5,name:"Visakhapatnam"},
    {id:14,s_id:5,name:"Vijayawada"},
    {id:15,s_id:5,name:"Guntur"}
  ]
  const [selected_country,set_selected_country]=useState("")
  const [selected_state,set_selected_state]=useState("")
  const [selected_district,set_selected_district]=useState("")
  const [show_tb,set_show_tb]=useState(false)
  const [other_district,set_other_district]=useState("")

  const country_change=(e)=>
    {
      set_selected_country(e.target.value)
      set_selected_state("")
      set_selected_district("")
      set_show_tb(false)
      console.log("Selected Country:",e.target.value)
  }
  const state_change=(e)=>
    {
      set_selected_state(e.target.value)
      set_selected_district("")
      set_show_tb(false)
      console.log("Selected State:",e.target.value)
    }
  const dist_change=(e)=>
    {
      set_selected_district(e.target.value)
      const sel_dist=e.target.value
      console.log("Selected District:",e.target.value)
      if (sel_dist=="Other")
        {
          set_show_tb(true)
        }
      else
      {
        set_show_tb(false)
      }
    }
    const other_dist_change=(e)=>
      {
        set_other_district(e.target.value)
      }
    const handle_press_enter=(e)=>
      {
        if (e.key=="Enter")
          {e.preventDefault();  {/*preventDefault() - Prevents the enter key from submitting the form*/}
        console.log("Other District:",e.target.value)
          }
      }
  const filtered_state=states.filter(i=>
    i.c_id==selected_country
  )
  const filtered_district=districts.filter(i=>
    i.s_id==selected_state
  )
  return (
    <div class="main">
      <center><h1>Location Selector</h1></center><br></br><br></br><br></br>
      <form>
        <label>Country:</label>
        <select name="ctry" id="ctry" onChange={country_change}>
          <option value="" disabled selected>Select a Country</option>
          {countries.map(i=>
            <option value={i.id}>{i.name}</option>
          )}
        </select><br></br><br></br>
        <label>State:</label>
        <select name="state" id="state" onChange={state_change} value={selected_state}>
          <option value=""disabled selected>Select a State</option>
          {filtered_state.map(i=>
          <option value={i.id}>{i.name}</option>
          )}
        </select><br></br><br></br>
        <label>District:</label>
        <select name="dist" id="dist" onChange={dist_change} value={selected_district} >
          <option value=""disabled selected>Select a District</option>
          {filtered_district.map(i=>
          <option value={i.id}>{i.name}</option>
          )}
          <option name="Other" value="Other">Other</option>       
        </select>
        {
          show_tb && 
          (
            <div>
            <br></br><label>Other District:</label>
            <input type="text" placeholder="Enter your district" onChange={other_dist_change} onKeyDown={handle_press_enter}/> {/*onKeyDown - specifies how to handle when a specified key is pressed */}
            </div>
          )
        }
      </form>
    </div>
  )
}

export default LocationSelector

