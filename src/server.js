import axios from "axios";

const BASE_URL = "https://app.tablecrm.com/api/v1"; // Replace with your actual API URL

// Create an Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`, // Add the token to the headers
    "Content-Type": "application/json", // Set content type if needed
  },
});

// Web App Method
export const getWebAppData = async () => {
  try {
    const response = await axiosInstance.get("/webapp");
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Orders Method
export const createOrder = async (orderData) => {
  try {
    const response = await axiosInstance.post("/orders", orderData);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Categories Methods
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/categories");
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getCategoryById = async (id) => {
  try {
    const response = await axiosInstance.get(`/categories/${id}`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(`/categories/${id}`);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const editCategory = async (id, categoryData) => {
  try {
    const response = await axiosInstance.patch(
      `/categories/${id}`,
      categoryData
    );
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const createCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post("/categories", categoryData);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

export const getCategoriesTree = async () => {
  try {
    const response = await axiosInstance.get("/categories_tree");
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Points Method
export const createPoints = async (pointsData) => {
  try {
    const response = await axiosInstance.post("/points", pointsData);
    return handleResponse(response);
  } catch (error) {
    handleError(error);
  }
};

// Response handler
const handleResponse = (response) => {
  if (response.data) {
    return response.data;
  }
  throw new Error("Unexpected response format");
};

// Error handler
const handleError = (error) => {
  console.error("API call failed:", error);
  throw error; // Rethrow the error for further handling
};
