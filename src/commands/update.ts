import { readTasks, writeTasks } from "../utils/fileHandler";

export function updateTask(id: number, newDescription: string): void {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex === -1) {
        console.log(`❌ Task with ID ${id} not found.`);
        return;
    }

    tasks[taskIndex].description = newDescription;
    tasks[taskIndex].updatedAt = new Date().toISOString();

    writeTasks(tasks);
    console.log(`✅ Task #${id} updated successfully.`);
}
