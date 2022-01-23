import React from 'react'; 
import Card from './Card';
import Sdata from './Sdata';
import './App.css';


const Service = () =>{
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Our Service</h1> 
        </div>
        <div className="container-fluid mb-2">
            <div className="row ">
                <div className="col-md-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((val, ind) => {
                                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div> 
        <section className="footer text-center"> 
            <div className="copyright">
                <h6>@Copyright-2020 || Developed by Sohailul Alam</h6>
            </div>
        </section>
        </>
    )
}

export default Service;