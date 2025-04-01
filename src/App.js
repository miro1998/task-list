import React, { useState, useEffect } from "react";

function App() {
  // Alustetaan tehtävälista käyttäen localStoragea
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Alustetaan muokattavan tehtävän tila
  const [editingTask, setEditingTask] = useState(null);

  // Alustetaan uuden tehtävän luomisen kentät
  const [newTask, setNewTask] = useState({ name: "", description: "", status: "PENDING" });

  // Funktio tehtävän tilan päivittämiseen
  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  // Funktio tehtävän muokkaamiseen
  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setEditingTask(taskToEdit);
  };

  const handleSaveEditedTask = () => {
    const updatedTasks = tasks.map(task =>
      task.id === editingTask.id ? { ...editingTask } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  // Funktio uuden tehtävän lisäämiseen
  const handleAddTask = () => {
    const newTaskWithId = { ...newTask, id: tasks.length + 1 };
    const updatedTasks = [...tasks, newTaskWithId];
    setTasks(updatedTasks);
  };

  // Tallennetaan tehtävät localStorageen aina kun tehtävälista päivittyy
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>Tehtävälista</h1>

      {/* Tehtävän luominen */}
      <div>
        <input
          type="text"
          placeholder="Tehtävän nimi"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tehtävän kuvaus"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={handleAddTask}>Lisää tehtävä</button>
      </div>

      {/* Tehtävälista */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {/* Näytetään muokkauslomake, jos tehtävää ollaan muokkaamassa */}
            {editingTask?.id === task.id ? (
              <div>
                <input
                  type="text"
                  value={editingTask.name}
                  onChange={(e) => setEditingTask({ ...editingTask, name: e.target.value })}
                />
                <input
                  type="text"
                  value={editingTask.description}
                  onChange={(e) => setEditingTask({ ...editingTask, description: e.target.value })}
                />
                <button onClick={handleSaveEditedTask}>Tallenna</button>
              </div>
            ) : (
              <div>
                <span>{task.name} - {task.status}</span>
                <button onClick={() => updateTaskStatus(task.id, 'IN_PROGRESS')}>Aloita</button>
                <button onClick={() => updateTaskStatus(task.id, 'COMPLETED')}>Valmis</button>
                <button onClick={() => handleEditTask(task.id)}>Muokkaa tehtävää</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

