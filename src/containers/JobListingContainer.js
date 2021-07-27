import React from 'react'
import JobListing from '../components/JobListing'
import Apple from "../resources/apple-avatar.jpg"
import Binance from "../resources/binance-avatar.png"
import GoldmanSachs from "../resources/goldmansachs-avatar.jpg"

export default function JobListingContainer() {
    return (
        <div className="job-listing-cards-container">
            <div className="row">
                <JobListing 
                    avatar={Apple}
                    companyName="Apple"
                    cardtitle="Data Engineer"
                    timestamp="1 minute ago"
                    specialisation="Data"
                    techStackList={["Oracle", "HDFS", "Hive", "Spark", "yarn", "testoverflow"]}
                />

                <JobListing 
                    avatar={Binance}
                    companyName="Binance"
                    cardtitle="Backend Service Developer"
                    timestamp="2 minutes ago"
                    specialisation="Backend"
                    techStackList={["Spring", "Java"]}
                />

                <JobListing 
                    avatar={GoldmanSachs}
                    companyName="Goldman Sachs"
                    cardtitle="Full Stack Developer (Data Modeling)"
                    timestamp="3 minutes ago"
                    specialisation="Full Stack"
                    techStackList={["Analytics", "UDB", "ORM", "Apache", "testoverflow"]}
                />
            </div>
        </div>
    )
}
