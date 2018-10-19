import Axios from 'axios';
import * as React from 'react';
import '../styles/css/App.css'

interface IUser {
    email: string
    name: string
}

class AxiosTest extends React.Component<any, IUser> {

    public state: IUser = {
        email: "",
        name: ""
    };

    constructor(props: any) {
        super(props);
        this.getFoo = this.getFoo.bind(this);
    }

    public render() {
        return (
            <div>
                <form className="App" onSubmit={this.getFoo}>
                    <input style={{margin: "20px auto", display: "block"}} type="text" name="foo"/>
                    <button>Submit</button>
                </form>
                {this.state.name ? <p>Name: {this.state.name}</p> : null}
                {this.state.email ? <p>Email: {this.state.email}</p> : null}
            </div>
        );
    }

    private readonly getFoo = (e: any) => {
        e.preventDefault();
        const foo = e.target.elements.foo.value;
        Axios.get(`https://api.github.com/users/${foo}`)
            .then((res) => {
                const email: string = res.data.email === null ? "" : res.data.email;
                const name: string = res.data.name === null ? "" : res.data.name;
                this.setState({email, name});

                // Just to see the response for debugging
                global.console.log(res);
            })
    }
}

export default AxiosTest;
