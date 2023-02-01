
import React from 'react';
import { useState, useEffect, ReactNode, ReactElement } from 'react';
import jwt_decode, { JwtPayload } from 'jwt_decode';

const Context: any = React.createContext<null>(null);

function ContextProvider({ children } : { children: ReactNode }): ReactElement {
    const [user, setUser] = useState <string | null > (null);


function handleCallbackResponse(response: any) {
    const userObject: any | null = jwt_decode<JwtPayload>(response.credential);
		//create a new object from user object, make the shape match the shape of 
        //the object we get from own oauth
		const { name, email, picture } = userObject;
		const newUser: any | null = { name: name, email: email, picture: picture }
        // set user to userObject */ going from null to defined and allows routes to display 
		setUser(newUser); 
}
    useEffect(() => {
        /* global google */
        (window as any).google.accounts.id.initialize({
            client_id: '833474983530-c13t85njtalij2aqacd17slt6tr8te5j.apps.googleusercontent.com',
            callback: handleCallbackResponse,
        });
    }, [user]);

    return (
		<Context.Provider
			value={{
				user,
				setUser,
				handleCallbackResponse,
			}}
		>
			{children} {/* {props.children} */}
		</Context.Provider>
	);
}

export { ContextProvider, Context }