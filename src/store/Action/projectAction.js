export const  createProject=(project)=>{
    //when you use thunk , you can return a function
    return (dispatch,getState,{getFirebase,getFirestore})=>{
         // make a async call to database(firebase here)  -npm install react-redux-firebase redux-firestore
        
         //initiate firestore
         const firestore=getFirestore();
         const profile=getState().firebase.profile;
         const authorId=getState().firebase.auth.uid;
         firestore.collection('projects').add({
             ...project,
             authorFirstName:profile.firstName,
             authorLastName:profile.lastName,
             authorId:authorId,
             createdAt: new Date()
         })
         .then(()=>{
            dispatch({type:'CREATE_PROJECT',project});
         })
         .catch((err)=>{
             dispatch({type:'CREATE_PROJECT_ERROR',err})
         })
        
    }

    
}