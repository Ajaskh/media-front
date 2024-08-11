
import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonRequest";

// add videos
// function definition for add video

export const addVideo = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/videos`, body)
}


// get videos
// function definition for get video from back end

export const getVideo = async () => {
    return await commonRequest("GET", `${BASE_URL}/videos`)
}


// delete video
//  function definition for deleting video from back end

export const deleteVideo = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/videos/${id}`, {})
}


// add category
// function definition for add category

export const addCategory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/category`, body)
}

// get category
export const getCategory = async () => {
    return await commonRequest("GET", `${BASE_URL}/category`, "")
}

// to delete category
export const deleteCategory = async (id) => {
    return await commonRequest("DELETE", `${BASE_URL}/category/${id}`, {})
}

// get watch history

export const getHistory = async () => {
    return await commonRequest("GET", `${BASE_URL}/watchhistory/`, "")
}


export const deleteVideoHistory = async(id)=>{
    return await commonRequest('DELETE',`${BASE_URL}/watchhistory/${id}`,{})
}

// add history

export const addHistory = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/watchhistory/`, body)
}





// to get a specific video data from back-end

export const getVideos = async (id) => {
    return await commonRequest("GET", `${BASE_URL}/videos/${id}`, "")
}

// to update video details in category

export const updateCategory = async (id, body) => {
    return await commonRequest("PUT", `${BASE_URL}/category/${id}`, body)
}
