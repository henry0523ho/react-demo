import { FormEventHandler, useState } from "react";
function EditForm(props: {
  todo: { content: string; id: number; completed: boolean; isEditing: boolean };
  editTodo: (id: number, content: string) => void;
}) {
  const [content, setContent] = useState(props.todo.content);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.editTodo(props.todo.id, content);
    setContent("");
  };
  return (
    <form
      className="rounded-lg border-accent border-2 flex flex-row justify-between pl-1 content-stretch mt-2"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="請輸入代辦事項"
        className="bg-secondary p-2 outline-none w-6/7"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button className="bg-accent text-white p-2 " type="submit">
        完成
      </button>
    </form>
  );
}

export default EditForm;
