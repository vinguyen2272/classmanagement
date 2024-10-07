interface LearningMaterial {
    title: string;
    link: string;
    uploader: string;
    uploadDate: string;
}

interface MiniSection {
    miniSectionId: number;
    name: string;
    miniSectionDuration: number;
    isOnline: boolean;
    learningMaterials: LearningMaterial[];
    output: string[];
    isPractice: boolean;
}

interface Lesson {
    lessonId: number;
    lessonName: string;
    miniSections: MiniSection[];
}

interface Quiz {
    quizId: number;
    name: string;
    isDone: boolean;
    testDate: string;
}

interface Assignment {
    assignmentId: number;
    name?: string;
    testName?: string;
    isDone: boolean;
    testDate: string;
}

interface Mock {
    mockId: number;
    name: string;
    isDone: boolean;
    testDate: string;
}

interface Final {
    finalId: number;
    name: string;
    isDone: boolean;
    testDate: string;
}

interface TestPlan {
    quiz: Quiz[];
    assignment: Assignment[];
    mock: Mock[];
    final: Final[];
}

export interface CourseModel {
    creationDate: string;
    commenceDate: string;
    completionDate: string;
    desciption: string;
    courseName: string;
    status: string;
    trainers: any[];
    studentCount: number;
    location: any[];
    contactEmail: string;
    createdBy: string;
    approvedBy: string;
    reviewedBy: string;
    reviewedDate: string;
    approvedDate: string;
    courseAlias: string;
    startTime: string;
    endTime: string;
    superAdmin: any[];
    regularAdmin: any[];
    reservedLearner: number[];
    waitingList: any[];
    ongoingLearner: number[];
    droppedLearner: any[];
    passedLearner: number[];
    failedLearner: number[];
    courseId: string;
    finalOutput: string[];
    teachingSchedule: Lesson[];
    testPlan: TestPlan;
}


