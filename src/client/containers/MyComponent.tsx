import {version} from 'inferno';
import Component from 'inferno-component';
import {Incrementer} from '../components/Incrementer';

require('./css/main.css');

export class MyComponent extends Component<any, any> {
	private tsxVersion: number;

	constructor(props, context) {
		super(props, context);
		this.tsxVersion = 2.15; /* This is typed value */
	}

	render() {
		return (
			<div>
				<h1>{`Welcome to Inferno ${version} TSX ${this.tsxVersion}`}</h1>
				<Incrementer name={'Crazy button'}/>
			</div>
		);
	}
}
