import { connectToDB } from "@/database/mongodb";
import Team from "@/models/team";

export const GET = async (req: Request, { params }: any) => {
  try {
    await connectToDB();
    const team = await Team.findById(params.id);
    if (team) return new Response(JSON.stringify(team), { status: 200 });
    else
      return new Response(JSON.stringify({ message: "team not found" }), {
        status: 404,
      });
  } catch (err) {
    const errorBody = { message: "Failed to get team", err: err };
    return new Response(JSON.stringify(errorBody), { status: 500 });
  }
};
