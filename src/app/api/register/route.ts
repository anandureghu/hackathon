import { connectToDB } from "@/database/mongodb";
import Team from "@/models/team";
import TeamMembers from "@/models/teamMembers";

export const POST = async (req: Request) => {
  const { teamName, teamMembers, userId } = await req.json();
  try {
    await connectToDB();

    const newTeam = new Team({ name: teamName });
    await newTeam.save();
    const newTeamMember = new TeamMembers({
      teamId: newTeam._id,
      member: userId,
      role: "Leader",
    });
    await newTeamMember.save();
    const responseBody = {
      data: newTeam,
      message: "Successfully created new team",
    };
    return new Response(JSON.stringify(responseBody), { status: 201 });
  } catch (err) {
    const errorBody = { message: "Failed to create new team", err: err };
    return new Response(JSON.stringify(errorBody), { status: 500 });
  }
};
