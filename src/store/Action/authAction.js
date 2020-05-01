export const signIn=(credentials)=>{
    //because of thunk, we can hold the dispatch process and return a function instead
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password  
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        })
    }
}

export const signOut=()=>{
    return (dispatch,getState,{ getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp=(newUser)=>{
    console.log(newUser)
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((res)=>{
            console.log(res);
            //use the auth generated user Id from te firebase to create user file inside the firestore
            return firestore.collection('users').doc(res.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0]+newUser.lastName[0]
            }) 
        }).then(()=>{
            dispatch({type:'SIGNUP_SUCCESS'})
        }).catch((error)=>{
            dispatch({type:'SIGNUP_ERROR',error})
        })
    }
}