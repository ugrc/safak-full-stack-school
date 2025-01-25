import { z } from "zod";

export const adfSchema = z.object({
  id: z.number(),
  name: z.string(),
  commonName: z.string().optional(),
  description: z.string().optional(),
  regulationType: z.string().optional(),
  annNo: z.string().optional(),
  annAgency: z.string().optional(),
  annBody: z.string().optional(),
  state: z.string().optional(),
  body: z.string().optional(),
  orginalUrl: z.string().optional(),
  documentedOn: z.coerce.date().optional(),
  publishedOn: z.coerce.date().optional(),
  effectiveOn: z.coerce.date().optional(),
  expiredOn: z.coerce.date().optional(),
  functionalDomains: z.string().optional(),
  predecessors: z.array(z.number()).optional(),
  successors: z.array(z.number()).optional(),
  upstreams: z.array(z.number()).optional(),
  downstreams: z.array(z.number()).optional(),
});

export const citSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "请输入合规条文名称!" }),
  description: z.string().min(1, { message: "请输入合规条文名称!" }),
  cobs: z.array(z.string()), //cobs ids
});

export type CitSchema = z.infer<typeof citSchema>;

export const cobSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "请输入控制目标名称!" }),
  description: z.string().min(1, { message: "请输入控制目标名称!" }),
  cits: z.array(z.string()), //cits ids
});

export type CobSchema = z.infer<typeof cobSchema>;

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()), //teacher ids
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  capacity: z.coerce.number().min(1, { message: "Capacity name is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade name is required!" }),
  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(), // subject ids
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),
  classId: z.coerce.number().min(1, { message: "Class is required!" }),
  parentId: z.string().min(1, { message: "Parent Id is required!" }),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: "Title name is required!" }),
  startTime: z.coerce.date({ message: "Start time is required!" }),
  endTime: z.coerce.date({ message: "End time is required!" }),
  lessonId: z.coerce.number({ message: "Lesson is required!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;
