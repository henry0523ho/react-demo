import { addTodo } from "@/lib/mongo/todoDB";
import { revalidatePath } from "next/cache";
function CreateForm() {
  async function action(data: FormData) {
    "use server";
    const content = data.get("content");
    await addTodo(content as string);
    revalidatePath("/todolist");
  }
  return (
    <form
      className="rounded-lg border-accent border-2 flex flex-row justify-between pl-1 content-stretch"
      action={action}
      key={Math.random()}
    >
      <input
        type="text"
        placeholder="請輸入代辦事項"
        className="bg-secondary p-2 outline-none w-6/7"
        name="content"
      />
      <button className="bg-accent text-white p-2 " type="submit">
        新增
      </button>
    </form>
  );
}

export default CreateForm;
