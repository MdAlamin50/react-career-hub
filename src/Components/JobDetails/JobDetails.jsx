import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utlility/Localstorage";
import Banerrs from "../Banerrs/Banerrs";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("you have applied successfully");
  };
  return (
    <div>
      <Banerrs></Banerrs>
      <div className="grid gap-4 md:grid-cols-4 mt-10">
        <div className=" md:col-span-3">
          <h2>
            <span className="font-bold">Job Description :</span>
            {job.job_description}
          </h2>
          <div className="mt-5">
            <p>
              {" "}
              <span className="font-bold ">Job Responsibility:</span>{" "}
              {job.job_responsibility}
            </p>
          </div>
          <div className="mt-5">
            <p>
              {" "}
              <span className="font-bold">Educational Requirements:</span>
              {job.educational_requirements}
            </p>
            <p>
              <span className="font-bold">Experiences:</span>
              {job.experiences}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#bac1ea] to-[#b8a2f0]">
          <h1 className="font-bold">Job Details</h1>
          <hr />
          <div className="mt-5">
            <p>{job.salary}</p>
            <p>{job.job_type}</p>
          </div>

          <button
            onClick={handleApplyJob}
            className="btn btn-primary w-full rounded-lg font-bold p-2 mt-28"
          >
            Apply New
          </button>
        </div>

        <ToastContainer />
      </div>
    </div>
  );
};

export default JobDetails;
