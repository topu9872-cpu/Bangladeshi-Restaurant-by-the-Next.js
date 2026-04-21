import data from "@/data/restaurant.json";

export const GetAllData = async () => {
  try {
    return data;
  } catch (error) {
    console.error(error, "data not found");

    return [];
  }
};
