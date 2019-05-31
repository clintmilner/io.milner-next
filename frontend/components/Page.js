import React from 'react';
import Link from 'next/link';
export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        fetch(`http://localhost:1982/greeting`)
            .then((resp) => resp.json())
            .then(({greeting}) => {
                console.info('🔥', greeting);
                this.setState(() => ({greeting}));
            })
    }

    render() {
        return (
            <div className="page">
                {this.state.greeting}
                {this.props.children}
                💦 🚒
                <ul>
                    <li>
                    <Link href="/" title="Home Page">
                        <a>Home</a>
                    </Link>
                    </li>
                    <li>
                    <Link href="/about" title="About Page">
                        <a>About Page</a>
                    </Link>
                    </li>
                </ul>
            </div>
        );
    }
}