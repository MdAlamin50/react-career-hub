import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utlility/Localstorage";

const JobDetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job =>job.id === idInt);
    console.log(job)

    const handleApplyJob = () =>{
        saveJobApplication(id);
        toast('you have applied successfully')
    }
    return (
        <div>
             
             <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                    <h2>Job Details fo :{job.job_title}</h2> 
                    <p>{job.company_name}</p>
                </div>
                <div className="border">
                  dsfdfffdgas
                  <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply New</button>
                </div>

                <ToastContainer />

             </div>
        </div>
    );
};

export default JobDetails;