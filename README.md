# Task Manager — React + TypeScript + Vite

A small task management app used as a test target for the Jira-to-PR multi-agent pipeline.

## Structure

```
src/
├── App.tsx                 Main app component, holds task state
├── App.css                 Global styles
├── main.tsx                Entry point
├── types/
│   └── Task.ts              Task interface
├── components/
│   ├── TaskList.tsx         Renders the list of tasks
│   ├── TaskItem.tsx          Single task row with checkbox and delete
│   └── AddTaskForm.tsx       Form to add a new task
└── utils/
    └── idGenerator.ts       Generates random task IDs
```

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

## Test

```bash
npm run test
```
