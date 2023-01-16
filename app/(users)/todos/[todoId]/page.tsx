import React from "react";
import { Todo } from "../../../../typings";
import { notFound } from "next/navigation";

// server-side rendering at request time for dynamic pages
// but do need not-found page
export const dynamicParams = true;

type PageProps = {
	params: {
		todoId: string;
	};
};

const fetchTodo = async (todoId: string) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/todos/${todoId}`,
		{ next: { revalidate: 60 } } // stop statically generated pages from going stale
	);
	const todo: Todo = await response.json();
	return todo;
};

async function TodoPage({ params: { todoId } }: PageProps) {
	const todo = await fetchTodo(todoId);

	// if tries to server-side render a page that doesn't exist, return not-found page
	if (!todo.id) {
		notFound();
	}

	return (
		<div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
			<p>
				#{todo.id}: {todo.title}
			</p>
			<p>Completed: {todo.completed ? "Yes" : "No"}</p>
			<p className="border-t border-black mt-5 text-right">
				By User: {todo.userId}
			</p>
		</div>
	);
}

export default TodoPage;

// static generation at build time
export async function generateStaticParams() {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const todos: Todo[] = await response.json();

	// example of only prebuilding the first 10 pages
	const trimmedTodos = todos.splice(0, 10);

	return trimmedTodos.map((todo) => ({
		todoId: todo.id.toString(),
	}));
}
