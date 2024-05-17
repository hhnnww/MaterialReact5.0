export default class Path {
	path: string;

	constructor(path: string) {
		if (path) {
			this.path = path.replaceAll('\\', '/');
		} else {
			this.path = '';
		}
	}

	get parts() {
		return this.path.split('/');
	}

	get parent() {
		return new Path(this.parts.slice(0, -1).join('/'));
	}

	get parents() {
		const l = [] as Path[];
		const p = [] as string[];
		this.parts.map((item) => {
			p.push(item);
			l.push(new Path(p.join('/')));
		});
		return l;
	}

	get name() {
		return this.parts.slice(-1).join('');
	}

	get stem() {
		if (this.name.indexOf('.') === -1) {
			return this.name;
		}

		return this.name.split('.').slice(0, 1).join('');
	}

	get suffix() {
		if (this.name.indexOf('.') === -1) {
			return this.name;
		}

		return this.name.split('.').slice(-1).join('');
	}

	get num() {
		const num = this.stem.match(/\d+/g);
		if (num) {
			return parseInt(num.toString());
		}
		return 0;
	}
}
