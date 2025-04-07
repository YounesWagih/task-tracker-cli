import { Task, TaskStatus } from "../types/task";
import { readTasks } from "../utils/fileHandler";

export function listTasks(filter?: TaskStatus): void {
    const tasks = readTasks();

    const filteredTasks = filter
        ? tasks.filter((task) => task.status === filter)
        : tasks;

    if (filteredTasks.length === 0) {
        console.log("📭 No tasks found.");
        return;
    }

    console.log(`📋 listing ${filter ?? "all"} tasks:`);
    for (const task of filteredTasks) {
        console.log(
            `#${task.id} [${task.status.toUpperCase()}] - ${
                task.description
            } (created: ${task.createdAt})`
        );
    }
    return;
}
