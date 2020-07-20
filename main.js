import {ToyReact, Component} from './ToyReact'

let t = 'sdad'

class MyComponent extends Component {
    render() {
        return <div>
            <span>hello world</span>
            <div>{t}</div>
            <p>dsjakdjask</p>
            <div>
                <p>fdsf</p>
            </div>
        </div>
    }
}

let a = <MyComponent mame="a" id="ids"></MyComponent>;

ToyReact.render(
    a,
    document.body
)