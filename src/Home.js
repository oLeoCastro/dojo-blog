const Home = () => {

const handleClick = (e) => {
    console.log('hello, ninjas')
}

const handleClickAgain = () => {
    console.log('Hello, ' + name);
}

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;