import { TaskStatus } from "../types/task";
import { readTasks, writeTasks } from "../utils/fileHandler";

export function markTaskStatus(id: number, status: TaskStatus) {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
        console.log(`❌ Task with ID ${id} not found.`);
        return;
    }
    tasks[taskIndex].status = status;
    tasks[taskIndex].updatedAt = new Date().toISOString();
    writeTasks(tasks);
    console.log(`✅ Task #${id} marked as ${status.toUpperCase()}`);
}
