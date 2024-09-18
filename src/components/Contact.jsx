import React from "react";
import sa from "./../assets/images/sa.jpg";

function Contact() {
  return (
    <div className="p-6 lg:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center items-center">
          <img src={sa} alt="" className="w-full h-auto" />
        </div>
        <div className="bg-red-600 p-6 lg:p-12">
          <div className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Request a Free Estimate
          </div>
          <form action="#" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-white block mb-1">
                  First Name (Required)
                </label>
                <input type="text" className="w-full p-2 rounded" />
              </div>
              <div className="flex-1">
                <label className="text-white block mb-1">
                  Last Name (Required)
                </label>
                <input type="text" className="w-full p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="text-white block mb-1">Email (Required)</label>
              <input type="email" className="w-full p-2 rounded" />
            </div>
            <div>
              <label className="text-white block mb-1">Phone (Required)</label>
              <input type="tel" className="w-full p-2 rounded" />
            </div>
            <div>
              <label className="text-white block mb-1">State (Required)</label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
            <div>
              <label className="text-white block mb-1">
                Address (Required)
              </label>
              <input type="text" className="w-full p-2 rounded" />
            </div>
            <div>
              <label className="text-white block mb-1">
                How did you hear about us? (Required)
              </label>
              <select className="w-full p-2 bg-white text-black rounded">
                <option>Google</option>
                <option>Yelp</option>
                <option>Bing</option>
                <option>Yahoo</option>
                <option>Friend</option>
                <option>Email</option>
                <option>Flyer</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-white block mb-1">
                How soon do you need this service? (Required)
              </label>
              <select className="w-full p-2 bg-white text-black rounded">
                <option>Immediately</option>
                <option>1-3 days</option>
                <option>This week or weekend</option>
                <option>Next week</option>
                <option>This month</option>
                <option>Next month</option>
                <option>No hurry, just looking into it</option>
              </select>
            </div>
            <div>
              <label className="text-white block mb-1">
                Services (Required)
              </label>
              <textarea
                placeholder="Describe in your own words what you're looking for"
                className="w-full p-2 rounded h-24"
              ></textarea>
            </div>
            <div className="text-white">
              <label className="block mb-1">
                Upload photos and videos (Optional)
              </label>
              <input type="file" className="w-full" />
            </div>
            <div className="text-white text-sm">Max. file size: 512 MB.</div>
            <div className="text-white text-sm mb-4">
              If you need to cancel your appointment, please text your name,
              address, and cancellation request to{" "}
              <a href="/" className="underline">
                801-512-7103
              </a>{" "}
              or{" "}
              <a href="/" className="underline">
                801-755-3040
              </a>
              . Thank you!
            </div>
            <div>
              <button
                type="submit"
                className="text-white bg-blue-800 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
