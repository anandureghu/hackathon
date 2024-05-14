import { Schema, model, models } from "mongoose";

const TeamSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
});

const Team = models.Team || model("Team", TeamSchema);
export default Team;
