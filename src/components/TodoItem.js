function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" className="todo-check" />

      <input type="text" className="todo-text" />
      <div className="btn-group">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </div>
  );
}
export default TodoItem;
