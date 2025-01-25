import {
  departmentData,
  entityClassData,
  entityData,
  entityTierData,
  entityTypeData,
  locationData,
  userData,
  adfData,
} from "../src/lib/grcData";
import { Day, PrismaClient, UserSex } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // ADMIN
  await prisma.admin.create({
    data: {
      id: "admin1",
      username: "admin1",
    },
  });
  await prisma.admin.create({
    data: {
      id: "admin2",
      username: "admin2",
    },
  });

  // GRADE
  for (let i = 1; i <= 6; i++) {
    await prisma.grade.create({
      data: {
        level: i,
      },
    });
  }

  // CLASS
  for (let i = 1; i <= 6; i++) {
    await prisma.class.create({
      data: {
        name: `${i}A`,
        gradeId: i,
        capacity: Math.floor(Math.random() * (20 - 15 + 1)) + 15,
      },
    });
  }

  // SUBJECT
  const subjectData = [
    { name: "Mathematics" },
    { name: "Science" },
    { name: "English" },
    { name: "History" },
    { name: "Geography" },
    { name: "Physics" },
    { name: "Chemistry" },
    { name: "Biology" },
    { name: "Computer Science" },
    { name: "Art" },
  ];

  for (const subject of subjectData) {
    await prisma.subject.create({ data: subject });
  }

  // TEACHER
  for (let i = 1; i <= 15; i++) {
    await prisma.teacher.create({
      data: {
        id: `teacher${i}`, // Unique ID for the teacher
        username: `teacher${i}`,
        name: `TName${i}`,
        surname: `TSurname${i}`,
        email: `teacher${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
        bloodType: "A+",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        subjects: { connect: [{ id: (i % 10) + 1 }] },
        classes: { connect: [{ id: (i % 6) + 1 }] },
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 30)
        ),
      },
    });
  }

  // LESSON
  for (let i = 1; i <= 30; i++) {
    await prisma.lesson.create({
      data: {
        name: `Lesson${i}`,
        day: Day[
          Object.keys(Day)[
            Math.floor(Math.random() * Object.keys(Day).length)
          ] as keyof typeof Day
        ],
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 3)),
        subjectId: (i % 10) + 1,
        classId: (i % 6) + 1,
        teacherId: `teacher${(i % 15) + 1}`,
      },
    });
  }

  // PARENT
  for (let i = 1; i <= 25; i++) {
    await prisma.parent.create({
      data: {
        id: `parentId${i}`,
        username: `parentId${i}`,
        name: `PName ${i}`,
        surname: `PSurname ${i}`,
        email: `parent${i}@example.com`,
        phone: `123-456-789${i}`,
        address: `Address${i}`,
      },
    });
  }

  // STUDENT
  for (let i = 1; i <= 50; i++) {
    await prisma.student.create({
      data: {
        id: `student${i}`,
        username: `student${i}`,
        name: `SName${i}`,
        surname: `SSurname ${i}`,
        email: `student${i}@example.com`,
        phone: `987-654-321${i}`,
        address: `Address${i}`,
        bloodType: "O-",
        sex: i % 2 === 0 ? UserSex.MALE : UserSex.FEMALE,
        parentId: `parentId${Math.ceil(i / 2) % 25 || 25}`,
        gradeId: (i % 6) + 1,
        classId: (i % 6) + 1,
        birthday: new Date(
          new Date().setFullYear(new Date().getFullYear() - 10)
        ),
      },
    });
  }

  // EXAM
  for (let i = 1; i <= 10; i++) {
    await prisma.exam.create({
      data: {
        title: `Exam ${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        lessonId: (i % 30) + 1,
      },
    });
  }

  // ASSIGNMENT
  for (let i = 1; i <= 10; i++) {
    await prisma.assignment.create({
      data: {
        title: `Assignment ${i}`,
        startDate: new Date(new Date().setHours(new Date().getHours() + 1)),
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1)),
        lessonId: (i % 30) + 1,
      },
    });
  }

  // RESULT
  for (let i = 1; i <= 10; i++) {
    await prisma.result.create({
      data: {
        score: 90,
        studentId: `student${i}`,
        ...(i <= 5 ? { examId: i } : { assignmentId: i - 5 }),
      },
    });
  }

  // ATTENDANCE
  for (let i = 1; i <= 10; i++) {
    await prisma.attendance.create({
      data: {
        date: new Date(),
        present: true,
        studentId: `student${i}`,
        lessonId: (i % 30) + 1,
      },
    });
  }

  // EVENT
  for (let i = 1; i <= 5; i++) {
    await prisma.event.create({
      data: {
        title: `Event ${i}`,
        description: `Description for Event ${i}`,
        startTime: new Date(new Date().setHours(new Date().getHours() + 1)),
        endTime: new Date(new Date().setHours(new Date().getHours() + 2)),
        classId: (i % 5) + 1,
      },
    });
  }

  // ANNOUNCEMENT
  for (let i = 1; i <= 5; i++) {
    await prisma.announcement.create({
      data: {
        title: `Announcement ${i}`,
        description: `Description for Announcement ${i}`,
        date: new Date(),
        classId: (i % 5) + 1,
      },
    });
  }

  //

  for (var user of userData) {
    const result = await prisma.user.upsert({
      where: { id: Number(user.id) },
      update: {},
      create: {
        ...user,
        id: Number(user.id),
      },
    });
    console.log(result);
  }

  for (var department of departmentData) {
    const result = await prisma.department.upsert({
      where: { id: Number(department.id) },
      update: {},
      create: {
        ...department,
        id: Number(department.id),
      },
    });
    console.log(result);
  }

  for (var location of locationData) {
    const result = await prisma.location.upsert({
      where: { id: Number(location.id) },
      update: {},
      create: {
        ...location,
        id: Number(location.id),
      },
    });
    console.log(result);
  }

  for (var entityTier of entityTierData) {
    const result = await prisma.entityTier.upsert({
      where: { id: Number(entityTier.id) },
      update: {},
      create: {
        ...entityTier,
        id: Number(entityTier.id),
        level: Number(entityTier.level),
      },
    });
    console.log(result);
  }

  for (var entityClass of entityClassData) {
    const predecessorIds = entityClass.predecessorId
      ? entityClass.predecessorId.split(",").map((id) => ({ id: parseInt(id) }))
      : undefined;
    console.log(predecessorIds);
    const result = await prisma.entityClass.upsert({
      where: { id: Number(entityClass.id) },
      update: {},
      create: {
        id: Number(entityClass.id),
        name: entityClass.name,
        tierId: entityClass.tierId ? null : parseInt(entityClass.tierId),

        predecessors: {
          connect: predecessorIds,
        },
        isRoot: String(entityClass.isRoot).toUpperCase() == "TRUE",
      },
    });
    console.log(result);
  }

  for (var entityType of entityTypeData) {
    const result = await prisma.entityType.upsert({
      where: { id: Number(entityType.id) },
      update: {},
      create: {
        ...entityType,
        id: Number(entityType.id),
        isActive: String(entityType.isActive).toUpperCase() == "TRUE",
      },
    });
    console.log(result);
  }

  for (var entity of entityData) {
    const typeIds = entity.entityTypeIds.split(",");
    const result = await prisma.entity.upsert({
      where: { id: Number(entity.id) },
      update: {},
      create: {
        id: Number(entity.id),
        name: entity.name,
        entityClassId: entity.entityClassId
          ? Number(entity.entityClassId)
          : null,
        entityTypes: {
          connect: typeIds.map((id) => ({ id: parseInt(id) })),
        },
      },
    });
    console.log(result);
  }

  // Adf data

  for (var adf of adfData) {
    const predecessorIds = adf.predecessors
      ? adf.predecessors.split(",").map((id) => ({ id: parseInt(id) }))
      : undefined;

    const upstreamIds = adf.upstreams
      ? adf.upstreams.split(",").map((id) => ({ id: parseInt(id) }))
      : undefined;

    const result = await prisma.adf.upsert({
      where: { id: Number(adf.id) },
      update: {},
      create: {
        id: Number(adf.id),
        name: adf.name,
        regulationType: adf.regulationType,
        annNo: adf.annNo,
        annAgency: adf.annAgency,
        annBody: adf.annBody,
        state: adf.state,
        body: adf.body,
        orginalUrl: adf.orginalUrl,
        documentedOn: adf.documentedOn ? (new Date(adf.documentedOn)).toISOString() : null,
        publishedOn: adf.publishedOn ? (new Date(adf.publishedOn)).toISOString() : null,
        effectiveOn: adf.effectiveOn ? (new Date(adf.effectiveOn)).toISOString() : null,
        expiredOn: adf.expiredOn ? (new Date(adf.expiredOn)).toISOString() : null,
        functionalDomains: adf.functionalDomains,
        predecessors: {
          connect: predecessorIds,
        },
        upstreams: {
          connect: upstreamIds,
        },
      },
    });
    console.log(result);
  }

  // Citations
  for (let i = 1; i <= 100; i++) {
    await prisma.cit.create({
      data: {
        name: `合规条文-${i}`,
        description: `合规内容 ${i}`,
        isActive: true,
      },
    });
  }
  // Control Objective
  for (let i = 1; i <= 100; i++) {
    await prisma.cob.create({
      data: {
        name: `控制目标-${i}`,
        description: `控制目标描述 ${i}`,
        cits: { connect: [{ id: (i % 10) + 1 }] },
      },
    });
  }

  console.log("Seeding completed successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
