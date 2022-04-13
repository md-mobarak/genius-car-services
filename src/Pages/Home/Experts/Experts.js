import React from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {

    const experts = [
        { id: 1, name: 'will smith', img: 'https://img.freepik.com/free-photo/hand-car-mechanic-with-wrench_146671-19679.jpg?w=740&t=st=1649676611~exp=1649677211~hmac=c77ff6f1f4629b1cd406a7caeea1d5f92bde6455e412fa1fef13b2e63c6a5b55' },
        { id: 2, name: 'will smith', img: 'https://img.freepik.com/free-photo/hand-car-mechanic-with-wrench_146671-19679.jpg?w=740&t=st=1649676611~exp=1649677211~hmac=c77ff6f1f4629b1cd406a7caeea1d5f92bde6455e412fa1fef13b2e63c6a5b55' },
        { id: 3, name: 'will smith', img: 'https://img.freepik.com/free-photo/hand-car-mechanic-with-wrench_146671-19679.jpg?w=740&t=st=1649676611~exp=1649677211~hmac=c77ff6f1f4629b1cd406a7caeea1d5f92bde6455e412fa1fef13b2e63c6a5b55' },
        { id: 4, name: 'will smith', img: 'https://img.freepik.com/free-photo/hand-car-mechanic-with-wrench_146671-19679.jpg?w=740&t=st=1649676611~exp=1649677211~hmac=c77ff6f1f4629b1cd406a7caeea1d5f92bde6455e412fa1fef13b2e63c6a5b55' },
        { id: 5, name: 'will smith', img: 'https://img.freepik.com/free-photo/hand-car-mechanic-with-wrench_146671-19679.jpg?w=740&t=st=1649676611~exp=1649677211~hmac=c77ff6f1f4629b1cd406a7caeea1d5f92bde6455e412fa1fef13b2e63c6a5b55' },
        { id: 6, name: 'will smith', img: 'https://img.freepik.com/free-photo/hand-car-mechanic-with-wrench_146671-19679.jpg?w=740&t=st=1649676611~exp=1649677211~hmac=c77ff6f1f4629b1cd406a7caeea1d5f92bde6455e412fa1fef13b2e63c6a5b55' }
    ]

    return (
        <div id='experts'>
            <h2 className='text-primary text-center my-4'>Our Experts</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-3">
                {
                    experts.map(expert => <Expert expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;