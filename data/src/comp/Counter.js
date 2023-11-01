import React from 'react'
import meeting from "../assets/meeting.png"
import departs from "../assets/department.png"
import "./Counter.css"
 import graphs from "../assets/graph.png";
function Counter() {
    return (
        <div class="container"  >
            <div class="row"  >
                <div class="col-4 offset-2 border border-2 rounded" style={{
                    minHeight: 100,
                    marginTop: 120,
                }} >
                    <h3 class=" text-secondary " style={{
                        fontSize: 20,
                        position: "absolute",
                        top: 30,
                    }} >Total Meetings
                        <br />
                        <p style={{
                            fontSize: 20,
                            color: 'black',
                            marginLeft: 10
                        }} >12,503</p>
                    </h3>
                    <span>
                        <img
                            style={{
                                marginLeft: 300
                            }}
                            height="40"
                            width="40"
                            src={meeting} alt=''
                        />
                    </span>

                </div>
                <div class="col-4 offset-2 border border-1 rounded" style={{
                    minHeight: 100,
                    marginTop: 120,
                }} >
                    <h3 class=" text-secondary " style={{
                        fontSize: 20,
                        position: "absolute",
                        top: 30,
                    }} >Total Departments
                        <br />
                        <p style={{
                            fontSize: 20,
                            color: 'black',
                            marginLeft: 10
                        }} >9,503</p>
                    </h3>
                    <span>
                        <img
                            style={{
                                marginLeft: 300
                            }}
                            height="40"
                            width="40"
                            src={departs} alt=''
                        />
                    </span>

                </div>
                {/* middle */}
                <div class="col-10 offset-2 border border-1 rounded" style={{
                    minHeight: 140,
                    marginTop: 20,

                }} >
                    <h3 class="" style={{
                        fontSize: 13,

                    }} >Today's Schedule
                    </h3>
                    <span   >
                        <ul style={{
                            backgroundColor: "#D3D3D3",
                            display: 'flex',
                            justifyContent: "space-around",
                            minHeight: 120,
                            borderRadius : 8
                        }} >
                            <li style={{
                                color: "black",
                                fontSize: 13,
                                marginTop: 35,

                            }} >Total Meetings
                                <br />
                                <span class="text-primary" style={{
                                    fontSize: 30,
                                }}  >30</span>
                            </li>
                            <li style={{
                                color: "black",
                                fontSize: 13,
                                marginTop: 35,

                            }} >Departments
                                <br />
                                <span class="text-primary" style={{
                                    fontSize: 30,
                                }}  >10</span>
                            </li>
                            <li style={{
                                color: "black",
                                fontSize: 13,
                                marginTop: 35,

                            }} >Participants
                                <br />
                                <span class="text-primary" style={{
                                    fontSize: 30,
                                }}  >1503</span>
                            </li>
                        </ul>
                    </span>

                </div>
                {/* third */}
                <div class="col-10 offset-2 bg-white border border-1" style={{
                    paddingTop :10,
                    marginTop : 10,
                }}  >
                    <ul style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop:  20,
                    }} >
                        <div  class="border border-auto rounded  " style={{
                            height : 130,
                            padding : 10,
                            backgroundColor :'#B2BEB5',
               
                       
                        }} >
                            <li style={{
                                marginTop  : 20,
                                color: 'burlywood'

                            }} >
                                <h6 style={{
                                    fontWeight : 400,
                                    color : 'black'
                                }} >Total Action Points  </h6>
                                <p class="text-dark"  style={{
                                    fontWeight : 'bold'
                                }} >500</p>

                            </li>
                        </div>
                        <div class="border border-auto rounded " style={{
                            height : 130,
                            padding : 10,
                            backgroundColor :'#B2BEB5'

                        }} >
                            <li  style={{
                                marginTop  : 20,
                                color: 'black'

                            }} >
                                <h6  style={{
                                    fontWeight : 400,
                                    color : 'black'
                                }} >Total Compliances  </h6>
                                <p class="text-dark"  style={{
                                    fontWeight : 'bold'
                                }} >100</p>

                            </li>
                        </div>
                        <div class="border border-auto rounded " style={{
                            height : 130,
                            padding : 10,
                            backgroundColor :'#B2BEB5'

                        }} >
                            <li style={{
                                marginTop  : 20,
                                color: 'black'

                            }} >
                                <h6 style={{
                                    fontWeight : 400,
                                    color : 'black'
                                }}  > Action Points in Progress  </h6>
                                <p class="text-dark"  style={{
                                    fontWeight : 'bold'
                                }} >200</p>

                            </li>
                        </div>
                        <div class="border border-auto rounded " style={{
                            height : 130,
                            padding : 10,
                            backgroundColor :'#B2BEB5'
                        }} >
                            <li  style={{
                                marginTop  : 20,
                                color: 'black'

                            }}  >
                                <h6 style={{
                                    fontWeight : 400,
                                    color : 'black'
                                }} >Completed</h6>
                                <p class="text-dark" style={{
                                    fontWeight : 'bold'
                                }} >200</p>

                            </li>
                        </div>
                    </ul>
                </div>

                {/* fourth */}
                <div class =" col-10 offset-2 bg-white border border-1 " style={{
                    marginTop: 30,
                    height: 300,
                }} >
                     <img 
                        class="col-12 col-fluid "
                        style={{
                            backgroundSize : 'cover',   
                        }}
                        src={graphs}
                        alt=''
                    />
                </div>
                <div class="col-10 offset-2  border border-1"  style={{
                    display : 'flex',
                    flexDirection : 'row',
                    justifyContent : 'space-around',
                    marginBottom : 20,
                    
                }} >
                    <div  style={{ marginTop : 5 }}  >
                          <h6 class="text-secondary" style={{
                            marginLeft : 40
                          }} >1,50,308</h6>
                        <p style={{
                            fontWeight : 'lighter'
                        }} >Total Meetings of this year</p>
                    </div>
                    <div style={{}} >
                        <h6  class="text-secondary"  style={{
                            marginLeft : 40
                          }} >3,70,506</h6>
                        <p style={{
                            fontWeight : 'lighter'
                        }} >Total Participants of this year</p>
                    </div>
                </div>
               
               
            </div>
        </div>
    )
}

export default Counter
