import { addTask } from "./commands/add";
import { deleteTask } from "./commands/delete";
import { listTasks } from "./commands/list";
import { markTaskStatus } from "./commands/mark";
import { updateTask } from "./commands/update";
import { TaskStatus } from "./types/task";

const [, , command, ...args] = process.argv;

if (command === "help" || command === "h" || !command) {
    console.log(`
  📘 Task Tracker CLI — Usage Guide

  Commands:
    add "<description>"           Add a new task
    update <id> "<description>"   Update a task's description
    delete <id>                   Delete a task by ID
    mark-in-progress <id>         Mark task as in-progress
    mark-done <id>                Mark task as done
    list                          List all tasks
    list todo                     List tasks with status 'todo'
    list in-progress              List tasks with status 'in-progress'
    list done                     List tasks with status 'done'

  Examples:
    add "Buy milk"
    update 1 "Buy milk and eggs"
    mark-in-progress 1
    list done
    `);
    process.exit(0);
}

switch (command) {
    case "add": {
        const description = args.join(" ");
        if (!description) {
            console.log(
                '❌ Missing description.\n💡 Usage: add "<description>"'
            );
            break;
        }
        addTask(description);
        break;
    }

    case "list": {
        const statusArg = args[0] as TaskStatus | undefined;
        const validStatus = ["todo", "in-progress", "done"];
        if (statusArg && !validStatus.includes(statusArg)) {
            console.log("❌ Invalid input.\n💡 Usage: list <todo, in-progress, done>");
        } else {
            listTasks(statusArg);
        }
        break;
    }

    case "update": {
        const id = Number(args[0]);
        const newDescription = args.slice(1).join(" ");
        if (isNaN(id) || !newDescription) {
            console.log(
                '❌ Invalid input.\n💡 Usage: update <id> "<new description>"'
            );
            break;
        }
        updateTask(id, newDescription);
        break;
    }

    case "delete": {
        const id = Number(args[0]);
        if (isNaN(id)) {
            console.log("❌ Invalid input.\n💡 Usage: delete <id>");
        } else {
            deleteTask(id);
        }
        break;
    }
    case "mark-done": {
        const id = Number(args[0]);
        if (isNaN(id)) {
            console.log("❌ Invalid input.\n💡 Usage: mark-done <id>");
        } else {
            markTaskStatus(id, "done");
        }
        break;
    }

    case "mark-in-progress": {
        const id = Number(args[0]);
        if (isNaN(id)) {
            console.log("❌ Invalid input.\n💡 Usage: mark-in-progress <id>");
        } else {
            markTaskStatus(id, "in-progress");
        }
        break;
    }

    default: {
        console.log(`❓ Unknown command: ${command}`);
        console.log(`💡 Use "help" to see available commands.`);
        break;
    }
}
