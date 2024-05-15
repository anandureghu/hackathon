import { connectToDB } from "@/database/mongodb";
import Team from "@/models/team";
import TeamMembers from "@/models/teamMembers";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: any) => {
  try {
    await connectToDB();
    const teamMember = await TeamMembers.findOne({ member: params.memberId });
    if (teamMember) {
      const team = await Team.findById(teamMember.teamId);
      const members = await TeamMembers.find({ teamId: teamMember.teamId });
      const body = { team, members };
      return NextResponse.json({ data: body }, { status: 200 });
    } else
      return NextResponse.json(
        { message: "member is not in a team" },
        { status: 404 }
      );
  } catch (err) {
    const errorBody = { message: "Failed to get team list", err: err };
    return NextResponse.json(errorBody, { status: 500 });
  }
};
