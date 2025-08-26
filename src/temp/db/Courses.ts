const courses: Course[] = [
    {
        id: 1,
        title: "Intro into C#",
        description: "Course for people with no understanding of programming going over primitives, functions, structs and more.. Course for people with no understanding of programming going over primitives, functions, structs and more..",
        completed: 78,
        daysLeft: 5,
    },
    {
        id: 2,
        title: "Intro into Algebra",
        description: "From basic equations and inequalities to functions and graphing, preparing you for higher-level math.",
        completed: 3,
        daysLeft: 80,
    },
    {
        id: 3,
        title: "History of Spanish civil war bla bla bla",
        description: "Explaining the civil war starting from 1930’s until the win of the Nationalists in 1939.",
        completed: 40,
        daysLeft: 19,
    },
];

export function GetCourses(): Course[] {
    return courses;
}