import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CovideTrack = () => {

    const [data, setData] = useState([]);

    // const getCovidData = async () => {

    //     const res = await fetch("https://api.covid19india.org/data.json");

    //     const apiData = await res.json();
    //     console.log(apiData.statewise)
    //     setData(apiData.statewise)
    // };   




    useEffect(() => {
        async function getData(){

            const res = await axios.get("https://api.covid19india.org/data.json");
    
             console.log(res.data.statewise)
            
        }
        getData()
    },[])
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center" > <span className="font-weight-bold">INDIA</span> COVID-19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>state</th>
                                <th>confirmed</th>
                                <th>recovered</th>
                                <th>death</th>
                                <th>active</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curEle) => {
                                        return (
                                          <tr>
                                            <th>{curEle.state}</th>
                                            <th>{curEle.confirmed}</th>
                                            <th>{curEle.recovered}</th>
                                            <th>{curEle.death}</th>
                                            <th>{curEle.active}</th>
                                            <th>{curEle.lastupdatetime}</th>

                                        </tr>

                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}

export default CovideTrack;
