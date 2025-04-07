import fs from "fs";
import path from "path";
import { Task } from "../types/task";

const DATA_FILE = path.join(__dirname, "../../tasks.json");

function ensureDataFile(): void {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, "[]", "utf-8");
    }
}

export function readTasks(): Task[] {
    ensureDataFile();
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data) as Task[];
}

export function writeTasks(tasks: Task[]): void {
    fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2), "utf-8");
}
