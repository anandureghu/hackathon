import { connectToDB } from "@/database/mongodb";
import Team from "@/models/team";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDB();
    const teams = await Team.find({});
    return NextResponse.json(
      { data: teams, message: "Successfully collected teams" },
      { status: 200 }
    );
  } catch (err) {
    const errorBody = { message: "Failed to get team list", err: err };
    return NextResponse.json(errorBody, { status: 500 });
  }
};
