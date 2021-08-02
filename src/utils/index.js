export const fetchUsers = async (e, email, username, pass, setUser) => {
    e.preventDefault();
    try {
        let response;
        if (email){
        response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            email: email,
            password: pass
        })
    })
    } else {
        response = await fetch(`${process.env.REACT_APP_REST_API}users/${username}`)
    } 
    console.log(response);
    const data = await response.json();
    console.log(data);
    setUser(data.user.username)
    } catch (error) {
        console.log(error)
    }
}
