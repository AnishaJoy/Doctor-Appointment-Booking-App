//this file is for storing all the api's and its tokens stuff

const { default: axios } = require("axios")

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }
})

const getCategory = () => axiosClient.get('/categories?populate=*');

const getDoctorList = () => axiosClient.get('/doctors?populate=*');
const getDoctorByCategory = (category) =>
    axiosClient.get(`/doctors?filters[category][Name][$in]=${encodeURIComponent(category)}&populate=*`);
const getDoctorById = (slug) =>
    axiosClient.get(`/doctors?filters[slug][$eq]=${slug}&populate=*`);

const getSuggestionByList = () =>
    axiosClient.get('/doctors?populate=*');

const bookAppointment = (data) => axiosClient.post("/appointments", data);

// const sendEmail=(data)=>axios.post('/api/sendEmail',data);

const getUserBookingList = async (userEmail) => {
  try {
    const res = await fetch(
      `http://localhost:1337/api/appointments?filters[Email][$eqi]=${encodeURIComponent(userEmail)}&populate=doctor.Image`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching booking list:", error);
    return [];
  }
};
const deleteBooking = (documentId) => axiosClient.delete(`/appointments/${documentId}`)



export default {
    getCategory,
    getDoctorList,
    getDoctorByCategory,
    getDoctorById,
    getSuggestionByList,
    bookAppointment,
    // sendEmail
    getUserBookingList,
    deleteBooking
}
