use("Codetribe");

db.Facilitators.insertOne({
    Name: "Vukona Mnisi",
    Location: "TIH",
    Course: "Web and Mobile Development"
  })
db.Trainees.insertOne({
    Name: "Yolanda Mabotja",
    Location: "TIH",
    Facilitator: "Vukona Mnisi"
  })
db.Projects.insertOne({
    Name: "UI Challenge",
    Course: "Web and Mobile Development",
    Lesson: "React"
  })

  db.Facilitators.find()
  db.Trainees.find()
  db.Projects.find()