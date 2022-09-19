import client from "./client";

const totalData = () => client.get("/stats/getsAllStatsOfPlayer");
const MaxMinMoyData = () => client.get("/stats/getMaxMinMoystats");
const AllStatsPlayer = () => client.get("/stats/getStatsPlayerMatchs");

export default { totalData, MaxMinMoyData, AllStatsPlayer };
