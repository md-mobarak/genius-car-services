import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        <div class="col">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button className='text-white bg-primary border-0'>Add-To-Cart</button>
                </div>

                {/* <input type="submit" value="click-it" /> */}
            </div>
        </div>
    );
};

export default Expert;