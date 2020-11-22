import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
		journals: [
			{
				name: 'Journal',
				entries: [
					{
						title: 'Yoga',
						type: 'Exercise',
						created_at: new Date('2020-11-21T16:40:12-08:00'),
						updated_at: null,
						content: 'Free yoga on the bluff, with Beth',
						tags: [
							'yoga',
							'beth'
						]
					},
					{
						title: 'BoochJournal',
						type: 'Idea',
						created_at: new Date('2020-11-19T20:13:36-08:00'),
						updated_at: new Date('2020-11-21T17:20:44-08:00'),
						content: 'Make an app to journal like I want to',
						tags: [
							'app'
						]
					}
				]
			}
		]
    }
});

export default app;
