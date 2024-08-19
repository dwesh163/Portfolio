export interface Profile {
	name: string;
	description: string;
	image: string;
	about: Array<{
		title: string;
		description: string;
		skills: string[];
	}>;
	projects: Array<{
		title: string;
		description: string;
	}>;
	contact: {
		text: string;
		email: string;
		phone: string | null;
	};
}
