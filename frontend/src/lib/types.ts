export interface NavItem {
	name: string;
	path: string;
}

export interface UserResponse {
	id: number;
	username: string;
	email: string;
	points: number;
	locale: string;
	avatar: string;
	type: string;
	premium: number;
	expiration: string;
}

export interface PlexDebridItem {
	title: string;
	imdb_id: string;
	state: string;
	imdb_link: string;
	aired_at: string;
	genres: string[];
	guid: string;
	requested_at: string;
}

export interface StatusInterface {
	text?: string;
	color: string;
	bg: string;
	description: string;
}

export interface StatusInfo {
	[key: string]: StatusInterface;
}
