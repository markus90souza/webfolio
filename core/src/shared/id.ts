export default class Id {
	static gerar(): string {
		const parts = Array.from({ length: 3 }, () => Math.random().toString(36).substring(2, 9));
		return parts.join('-');
	}
}
