import { Layout } from "../../components/Layout"

function Todo() {
  return (
    <Layout>
      <div id="task">
        <div id="task-form">
          <input type="text" placeholder="Add Task" />
          <input type="checkbox" />
          <button type="submit">Save</button>
        </div>
        <div id="task-list">
            <div id="task-item">
                <span>Titulo</span>
                <div id="task-item-actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Todo