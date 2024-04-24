import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utlility/Localstorage";

const AppliedJobs = () => {
    
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs]=useState([]);
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job=>job.id ===id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied)
        }
    },[])
    return (
        <div>
            <h3 className="text-2xl">jobs i applied: {appliedJobs.length}</h3>
            <ul>
                {
                    appliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}</span>
                    </li>)
                }

            </ul>
        </div>
    );
};

export default AppliedJobs;