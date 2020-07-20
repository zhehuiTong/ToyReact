
class ElementWrapper {
    constructor(type) {
        this.root = document.createElement(type);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(vchild) {
        vchild.mountTo(this.root);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

class TexttWrapper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }

    mountTo(parent) {
        parent.appendChild(this.root);
    }
}

export class Component {
    constructor() {
        this.children = [];
    }
    setAttribute(name, value) {
        this[name] = value;
    }
    mountTo(patent) {
        let vdom = this.render();
        vdom.mountTo(patent);
    }
    appendChild(vchild) {
        this.children.push(vchild);
    }
}

export let ToyReact = {

    createElement(type, attrs, ...children) {
        let element;
        if (typeof type === "string") {
            element = new ElementWrapper(type);
        } else {
            element = new type;
        }
        for (let name in attrs) {
            element.setAttribute(name, attrs[name]);
        }
        let insertChildren = () => {
            for (let child of children) {
                if (typeof child === "object" && child instanceof Array) {
                    insertChildren(child);
                } else {
                    if (!(child instanceof Component)
                        &&!(child instanceof ElementWrapper)
                        &&!(child instanceof TexttWrapper)) {
                        child = child.toString();
                    }
                    if (typeof child === "string") {
                        child = new TexttWrapper(child);
                    }
                    element.appendChild(child);
                }
                
            }
        }

        insertChildren(children);
        
        return element;
    },
    render(vdom, element) {
        vdom.mountTo(element);
    }
}