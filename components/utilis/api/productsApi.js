import api from "./api";

export const getProductsApi = async () => {
  try {
    let response = await api.get("/products");
    console.log("Products API response", response.data);

    return response.data;
  } catch (error) {
    console.log("Products API error", error);

    throw new Error(
      error?.response?.data || "Something went wrong, please try again"
    );
  }
};

export const createProductsApi = async (data) => {
  try {
    let response = await api.post("/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Products API response", response.data);

    return response.data;
  } catch (error) {
    console.log("Products API error", error);

    throw new Error(
      error?.response?.data || "Something went wrong, please try again"
    );
  }
};

export const updateProductsApi = async (data, id) => {
  try {
    let response = await api.put(`/products/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Products API response", response.data);

    return response.data;
  } catch (error) {
    console.log("Products API error", error);

    throw new Error(
      error?.response?.data || "Something went wrong, please try again"
    );
  }
};

export const deleteProductsApi = async (id) => {
  try {
    let response = await api.delete(`/products/${id}`, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log("Products API response", response.data);

    return response.data;
  } catch (error) {
    console.log("Products API error", error);

    throw new Error(
      error?.response?.data || "Something went wrong, please try again"
    );
  }
};
