import { Task } from "../types/task";
import { readTasks, writeTasks } from "../utils/fileHandler";

export function addTask(description: string) {
    const tasks = readTasks();

    const newTask: Task = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        description: description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: "todo",
    };

    tasks.push(newTask);
    writeTasks(tasks);

    console.log(`✅ Task added successfully (ID: ${newTask.id})`);
}
