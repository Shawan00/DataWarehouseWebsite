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
