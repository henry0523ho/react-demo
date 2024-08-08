import { MdDelete, MdEdit } from "react-icons/md";
import ITodoDataProps from "@/lib/datatype/ITodoDataProps";
import { deleteTodo, updateTodoContent } from "@/lib/mongo/todoDB";
import { revalidatePath } from "next/cache";

function TodoItem(props: { todo: ITodoDataProps }) {
  async function completeAction() {
    "use server";
    await updateTodoContent(
      props.todo._id,
      props.todo.content,
      !props.todo.completed
    );
    revalidatePath("/todolist");
  }
  async function deleteTodoAction() {
    "use server";
    await deleteTodo(props.todo._id);
    revalidatePath("/todolist");
  }
  return (
    <form
      className={`bg-accent p-2 mt-2 flex justify-between align-center rounded-lg decoration-primary decoration-2 mt-2 ${
        props.todo.completed ? "opacity-50 line-through " : ""
      }`}
    >
      <button formAction={completeAction}>
        <p className="text-primary grow text-left cursor-pointer select-none">
          {props.todo.content}
        </p>
      </button>
      <div>
        {/* <button>
          <MdEdit className="inline rounded-lg text-secondary text-2xl cursor-pointer hover:text-text hover:bg-secondary mr-2" />
        </button> */}
        <button formAction={deleteTodoAction}>
          <MdDelete className="inline rounded-lg text-secondary text-2xl hover:text-text hover:bg-secondary" />
        </button>
      </div>
    </form>
  );
}

export default TodoItem;
