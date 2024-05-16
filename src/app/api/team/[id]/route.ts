import { connectToDB } from "@/database/mongodb";
import Team from "@/models/team";
import { NextResponse } from "next/server";

export const GET = async (req: Request, { params }: any) => {
  try {
    await connectToDB();
    const team = await Team.findById(params.id);
    if (team) return NextResponse.json({ data: team }, { status: 200 });
    else
      return NextResponse.json(
        { message: "team not found" },
        {
          status: 404,
        }
      );
  } catch (err) {
    const errorBody = { message: "Failed to get team", err: err };
    return NextResponse.json(errorBody, { status: 500 });
  }
};
