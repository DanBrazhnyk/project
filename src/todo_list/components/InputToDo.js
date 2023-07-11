import { useDispatch, useSelector } from "react-redux";
import { add, edit, deleteTodo, addInput, editInput, saveEdit } from "../todoSlice/todoSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "../assets/Todo.module.css";

export default function InputToDo() {
  const inputValue = useSelector((state) => state.methods.inputValue);
  const editValue = useSelector((state) => state.methods.editValue);
  const todos = useSelector((state) => state.methods.listTODO);
  const editMode = useSelector((state) => state.methods.editMode);
  const editIndex = useSelector((state) => state.methods.itemIndex);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.containerInput}>
        <TextField
          id="demo-helper-text-misaligned-no-helper"
          value={inputValue}
          onChange={(event) => {
            dispatch(addInput(event.target.value));
          }}
          label="Todo"
        />
        <Button
          variant="outlined"
          style={{ marginLeft:"10px"}}
          onClick={() => {
            dispatch(add());
          }}
        >
          Add
        </Button>
      </div>
      <div className={styles.containerLists}>
        {todos.map((todo, index) => (
          <div className={styles.ListsItem} key={index}>
            {editMode && editIndex === index ? (
              <>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  value={editValue}
                  onChange={(event) => {
                    dispatch(editInput(event.target.value));
                  }}
                  label="Edit"
                />
                <Button
                  variant="outlined"
                  style={{height:"53.4px"}}
                  onClick={() => {
                    dispatch(saveEdit());
                  }}
                >
                  Save
                </Button>
              </>
            ) : (
            <>
              <span>{todo}</span>
              <EditIcon  className={styles.editIcon} onClick={() => dispatch(edit(index))}/>
              <DeleteIcon onClick={() => dispatch(deleteTodo(index))}/>
            </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
