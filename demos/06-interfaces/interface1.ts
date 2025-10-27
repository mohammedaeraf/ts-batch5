interface Student {
  id: number;
  title: string;
  course: string;
}
// overwhelming
const s1: Student = {
  id: 1,
  title: "Ayesha",
  course: "TypeScript",
};

console.log(s1.title);
