import React from 'react'
import TechStackComponent from './TechStackComponent'

export default function JobListing(props) {
    return (
        <div className="job-listing-card col-12 col-md-4">
            <div className="job-listing-card-top-information">
                <div className="row top-portion">
                    <div className="avatar-container col-6 col-sm-12">
                        <img className="company-avatar" src={props.avatar} />
                    </div>

                    <div className="information-container col-6 col-sm-12">
                        <p>{props.companyName}</p>
                        <h2 className="job-listing-card-title">{props.cardtitle}</h2>
                    </div>

                    <div className="job-listing-card-middle-information">
                        <div>
                            <p>{props.timestamp}</p>
                        </div>
                        <span className="specialisation-container">
                            {props.specialisation}
                        </span>
                    </div>

                    <div className="job-listing-card-bottom-information">
                        <TechStackComponent 
                            techStackList={props.techStackList}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
