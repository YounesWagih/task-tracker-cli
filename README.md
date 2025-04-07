# ✅ Task Tracker CLI

A simple and lightweight command-line task tracking application built with TypeScript.  
This tool helps you manage your to-dos, track progress, and mark tasks as complete — all from your terminal!

##### challenge from [roadmap.sh](https://roadmap.sh/projects/task-tracker)
---

## 🚀 Features

- ✅ Add, update, and delete tasks
- 🔄 Mark tasks as `todo`, `in-progress`, or `done`
- 📋 List tasks by status or view all tasks
- 💾 JSON file storage (no external database or dependencies)
- 💡 Built with clean architecture and TypeScript best practices

---

## 📦 Installation & Setup

### 1. Clone the repo

```bash
git clone https://github.com/YounesWagih/task-tracker-cli.git
cd task-tracker-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run with ts-node

You can run the CLI directly using:

```bash
npx ts-node src/index.ts <command>
```

Or you can add a script or alias later.

---

## 🛠️ Commands & Usage

### ➕ Add Task

```bash
npx ts-node src/index.ts add "Buy groceries"
```

### ✏️ Update Task

```bash
npx ts-node src/index.ts update 1 "Buy groceries and cook dinner"
```

### 🗑️ Delete Task

```bash
npx ts-node src/index.ts delete 1
```

### 🔄 Mark Task Status

```bash
npx ts-node src/index.ts mark-in-progress 2
npx ts-node src/index.ts mark-done 2
```

### 📋 List Tasks

```bash
npx ts-node src/index.ts list
npx ts-node src/index.ts list done
npx ts-node src/index.ts list in-progress
npx ts-node src/index.ts list todo
```

### 🆘 Help

```bash
npx ts-node src/index.ts help
```

---

## 📁 Project Structure

```
task-tracker-cli/
│
├── src/
│   ├── commands/         # All CLI commands (add, update, delete, mark, list)
│   ├── utils/            # File handling logic
│   ├── types/            # TypeScript types
│   └── index.ts          # Entry point of the CLI
│
├── tasks.json            # Auto-generated JSON storage
├── package.json
└── tsconfig.json
```

---

## 👨‍💻 Contributing

Want to improve this CLI or add new features? Feel free to fork the repo and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m 'Add feature xyz'`)
4. Push to the branch (`git push origin feature/xyz`)
5. Open a Pull Request

---

## ✨ Author

Made with ❤️ by [Younes Wagih](https://github.com/YounesWagih)
