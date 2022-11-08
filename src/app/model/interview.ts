export class Interview {
    constructor(
        public interviewId: number,
        public candidateId: number,
        public panelistId: number,

        public level: string,
        public title: string,
    ) { }

}