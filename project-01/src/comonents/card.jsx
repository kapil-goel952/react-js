import React from 'react'
function Card(props) {


    return (
        <div class="card-container">

            
            <div class="card blue">
                <div class="top"></div>

                <div class="profile">
                    <img src={props.pcrofilePic} alt="ile"/>
                </div>

                <h2>{props.name}</h2>
                <p>{props.rank}</p>

                <div class="stats">
                    <div>
                        <h3>{props.followers}</h3>
                        <span>Followers</span>
                    </div>
                    <div>
                        <h3>{props.following}</h3>
                        <span>Following</span>
                    </div>
                </div>

                <div class="buttons">
                    <button class="follow">Follow</button>
                    <button class="message">Message</button>
                </div>
            </div>

        </div>
    )
}

export default Card

