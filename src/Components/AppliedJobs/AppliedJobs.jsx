import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utlility/Localstorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import AppliedBaner from "./AppliedBaner/AppliedBaner";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
      // console.log(jobs, storedJobIds, jobsApplied)
    }
  }, [jobs]);
  return (
    <div className="">
      <AppliedBaner></AppliedBaner>
      <details className="dropdown">
        <summary className="m-1 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[white] mt-5">
          open or close
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <div className="card card-side bg-base-100 border mt-8">
              <figure>
                <img className="ml-6" src={job.logo} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{job.job_title}</h2>
                <p>{job.company_name}</p>

                <div>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                    {job.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
                    {job.job_type}
                  </button>
                </div>

                <div className="mt-4 flex">
                  <h2 className="flex mr-4">
                    <MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>
                    {job.location}
                  </h2>
                  <h2 className="flex">
                    <CiDollar className="text-2xl"></CiDollar>
                    {job.salary}
                  </h2>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[white]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
