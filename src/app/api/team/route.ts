import { connectToDB } from "@/database/mongodb";
import Team from "@/models/team";

export const GET = async () => {
  try {
    await connectToDB();
    const teams = await Team.find({});
    return new Response(JSON.stringify(teams), { status: 200 });
  } catch (err) {
    const errorBody = { message: "Failed to get team list", err: err };
    return new Response(JSON.stringify(errorBody), { status: 500 });
  }
};
