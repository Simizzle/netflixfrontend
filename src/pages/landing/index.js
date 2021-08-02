import { PageContainer } from '../../styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { fetchUsers } from '../../utils';

export const Landing = ({ setUser }) => {
    const [newUser, setNewUser] = useState(false);
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [pass, setPass] = useState();

    return(
        <PageContainer>
            <LogForm onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}>
                {newUser && <LogInput onChange={(e) => setEmail(e.target.value)} placeholder='email'/>}
                <LogInput onChange={(e) => setUsername(e.target.value)} placeholder='username'/>
                <LogInput onChange={(e) => setPass(e.target.value)} placeholder='password'/>
                <LogButton type='submit'>{newUser ? 'Sign Up' : 'Log In'}</LogButton>
            </LogForm>
            <LogButton type='button' onClick={() => setNewUser(!newUser)}>{newUser ? 'Log In' : 'Sign Up'}</LogButton>
        </PageContainer>

    )
}

const LogInput = styled.input`
    width: 20vw;
`

const LogForm = styled.form`
    width: 35vw;
`

const LogButton = styled.button`
    width: 20vh;
`