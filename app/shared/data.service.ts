import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const todos = [
			{
				id: 0,
				title: 'Изучить JavaScript',
				completed: true
			},
			{
				id: 1,
				title: 'Изучить Angular 2',
				completed: false
			},
			{
				id: 2,
				title: 'Написать приложение',
				completed: false
			}
		];

		return { todos: todos };
	}
}