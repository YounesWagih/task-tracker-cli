import { readTasks, writeTasks } from "../utils/fileHandler";

export function deleteTask(id: number): void {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
        console.log(`❌ Task with ID ${id} not found.`);
        return;
    }
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    writeTasks(tasks);
    console.log(
        `🗑️ Task #${deletedTask.id} deleted: "${deletedTask.description}"`
    );
}
