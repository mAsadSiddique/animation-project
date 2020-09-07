import React from 'react';
import Card from './Card';
import imgData from './ImagesData';

function Services() {

    return (
        <div className="my-5" >
            <h1 className="text-center" > Our Services </h1>
            <div className="container-fluid mb-5" >
                <div className="row" >
                    <div className="col-10 mx-auto" >
                        <div className="row gy-4" >
                            {
                                imgData.map((data, ind) => {
                                    return (
                                        <Card
                                            key={ind}
                                            title={data.title}
                                            imgSrc={data.imgSrc}
                                        />
                                    )

                                })
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}


export default Services;