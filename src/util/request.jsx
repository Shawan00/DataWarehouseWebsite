const salesAPI = "http://26.72.53.154:3000/factMatHangBan";

export const getSalesData = async (reqBody) => {
  const response = await fetch(salesAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const data = await response.json();
  console.log(data);
  return data;
}

const inventoryAPI = "http://26.72.53.154:3000/factKho";

export const getInventoryData = async (reqBody) => {
  const response = await fetch(inventoryAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  });
  const data = await response.json();
  console.log(data);
  return data;
}


const predictionAPI = "http://127.0.0.1:5000/predict"
export const predictDisease = async (data) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  }

  try {
    const response = await fetch(predictionAPI, config)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (e) {
    console.error("Error prediction: ", e)
    throw e
  }
}

const predictBatchAPI = "http://127.0.0.1:5000/predict_batch"
export const predictDiseaseBatch = async (formData) => {
  const config = {
    method: "POST",
    body: formData
  }

  try {
    const response = await fetch(predictBatchAPI, config)
    const data = await response.json()
    return data
  } catch (e) {
    console.error("Error prediction: ", e)
    throw e
  }
}

const uploadDataAPI = "http://127.0.0.1:5000/upload_csv_data"
const trainModelAPI = "http://127.0.0.1:5000/train_model"

export const uploadData = async (formData) => {
  const config = {
    method: "POST",
    body: formData
  }

  try {
    const response = await fetch(uploadDataAPI, config)
    const data = await response.json()
    return data
  } catch (e) {
    console.error("Error upload data: ", e)
    return {
      status: "error",
      message: "Failed to upload data"
    }
  }
}

export const trainModel = async () => {
  try {
    const response = await fetch(trainModelAPI, {
      method: "POST"
    })
    const data = await response.json()
    return data
  } catch (e) {
    console.error("Error train model: ", e)
    return {
      custom_lgbm: {
        status: "error",
        message: "Failed to train model"
      }
    }
  }
}


