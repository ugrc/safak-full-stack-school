import { z } from "zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
});

// (alias) type infer<T extends ZodType<any, any, any>> = T["_output"]
// Conditional Types: 
// 条件类型： 帮助描述输入/输出的类型
// SomeType extends OtherType? TrueType: FalseType
// 条件类型和范型一起使用 generics
type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const Page = () => {
  // person 参数没有对应的独立的类型定义
  // type Person {
  //     name: string;
  //     age: number;
  //     hobbies: [string, string];
  // }
  function describePerson(person: {
    name: string;
    age: number;
    hobbies: [string, string];
  }) {
    return `${person.name} is ${
      person.age
    } years old and loves ${person.hobbies.join(" and ")}`;
  }

  type GetFirstArgumentOfAnyFunction<T> = T extends (first: infer FirstArgument, ...args: any[]) => any? FirstArgument: never;

  const alex: GetFirstArgumentOfAnyFunction<typeof describePerson>  = {
    name: "Alex",
    age: 20,
    // hobbies: ['walking', 'cooking'] as [string, string] 把类型强制设置为tuple
    hobbies: ["walking", "cooking"],
  };

  
  // TS把alex的hobbies的参数推断为数组
  describePerson(alex);

  return <div className="">Page</div>;
};

export default Page;
