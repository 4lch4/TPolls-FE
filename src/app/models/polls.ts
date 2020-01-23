export class Poll {
  /** The unique identifier of the Poll object. */
  '_id': string;

  /** The optional name of the Poll, used for display purposes. */
  displayName: string;

  /** The actual question being posed to vote on. */
  question: Question;

  /**
   * The available responses to choose from or the choices added by those
   * who are voting, if it's enabled for the Poll.
   */
  responses: Response[];
}

export class Question {
  /** The title/short version of the question being posed. */
  title: string;

  /** The longer version/description of the question being posed. */
  description: string;
}

export class Response {
  /** The unique identifier of the Response object. */
  '_id': string;

  /** The actual response to cast as a vote. */
  content: string;

  /** The amount of times the response has been cast as a vote. */
  count: number;
}
