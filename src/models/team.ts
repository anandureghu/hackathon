import { Schema, model, models } from "mongoose";

const TeamSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Team = models.Team || model("Team", TeamSchema);
export default Team;
