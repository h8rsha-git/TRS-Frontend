import { Interview } from "./interview";

export class Feedback {
  constructor(
    public feedback_id: number,
    public comment: string, // done
    public rating: number,
    public status: string, // status
    public interview: Interview
  ) { }

}