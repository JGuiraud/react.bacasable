var Component1 = React.createClass({
    render: function () {
        return (<h3>Simple Component</h3>)
    }
});

var Component2 = React.createClass({
    render: function () {
        return (<div>
            <hr />
            <h3>Component 2</h3>
            <p>and it's paragraph</p>
            <hr />
        </div >)
    }
})

var Component3 = React.createClass({
    render: function () {
        return (<div>
            <h3>Component 3 multiple times in one .render</h3>
            <p>and its paragraph</p>
            <input type="" name="" value="and an input, 'cause why not?" />
        </div>)
    }
})

var Movie = React.createClass({
    render: function () {
        return (<div>
            <hr />
            <h1>{this.props.title}</h1>
            <h2>{this.props.genre}</h2>
        </div>)
    }
})

ReactDOM.render(<h1>Hello World</h1>, document.getElementById('headerExample'));
ReactDOM.render(<Component1 />, document.getElementById('componentExample'));
ReactDOM.render(<Component2 />, document.getElementById('componentExample2'));
ReactDOM.render(<div>
    <Component3 />
    <Component3 />
    <Component3 />
</div>, document.getElementById('componentExample3'));


ReactDOM.render(
    <div>
        <Movie title="Avatar" genre="Action" />
        <Movie title="Her" genre="Romance" />
        <Movie title="Titanic" genre="Drama" />
    </div>
    , document.getElementById('movie'))
