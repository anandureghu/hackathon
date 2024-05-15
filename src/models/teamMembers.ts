import { Schema, model, models } from "mongoose";

const TeamMembersSchema = new Schema({
  teamId: {
    type: String,
    required: [true, "teamId is required"],
  },
  member: {
    type: String,
    required: [true, "member is required"],
  },
  role: {
    type: String,
    required: false,
  },
});

const TeamMembers =
  models.TeamMembers || model("TeamMembers", TeamMembersSchema);
export default TeamMembers;
