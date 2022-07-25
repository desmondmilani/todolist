import React, {useState} from 'react';

import './App.css';

//import react router library
import { Routes, Route, useNavigate} from "react-router-dom";

//firebase imports
//firestore
import { db } from './firebase-config';
import { collection, addDoc, query, where, getDocs, deleteDoc, doc } from 'firebase/firestore';

//imports for firebase authentication
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut,signInWithEmailAndPassword, updateProfile} from "firebase/auth";

//import firebase config file
import { app } from './firebase-config';

//importing my pages
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import HomePage from './Pages/HomePage';

function App() {

  //Global variables
  const auth = getAuth(app);

  //collection reference
  const userNameCollection = collection(db, "users");
  const taskCollection = collection(db, "tasks")

  //google provider
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  //states for new user
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //states for login
  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");

  //user state
  const [user, setUser] = useState({});

  //state for task
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("high");

  //state for task list
  const [taskList, setTaskList] = useState([]);


  //function to create a new user
  const registerUserWithEmail = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {

      //addDoc(userNameCollection, {displayName: fullname, email: email});
      const displayName = fullname;
      setUser(()=>({...userCredential.user}));

      await updateProfile(auth.currentUser, { displayName: displayName }).then().catch()
      alert(fullname + " registered successfully to our system");

      navigate("/");
      
      
    })
    .catch(error => {
      alert(error.message);
    })
  }

  //register user with google account
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).then((result)=>{
      setUser(()=>({...result.user}))
      getTasks();
      navigate("/home");
    }).catch((error) => {
      alert(error.message);
    })
  }

  //login with email and password
  const loginWithEmail = async() => {
    await signInWithEmailAndPassword(auth, email2, password2).then((results)=>{
      const newUser = results.user;
      setUser(newUser);
      getTasks();
      navigate("/home");
    }).catch(error=> {
      alert(error.message);
    })
  }

  //function to signout
  const logOut = async() => {
    await signOut(auth).then(()=> {
      //good code
      setUser({});
      setTaskList([]);

      navigate("/")
    }).catch((error)=>{
      alert(error.message);
    })
  }

  //function to add task
  const addTask = async() => {
    let newTask = {task: task, priority: priority, status: false, email:user.email};
    await addDoc(taskCollection, newTask).then(response => {
      alert("Task added to database");
      getTasks()
      console.log(taskList)
    }).catch(error => {
      alert(error.message);
    })
  }

  //get tasks function
  const getTasks = async() => {
    if (user.email !== undefined) {
      const q = query(taskCollection, where("email", "==", user.email));
      let data = await getDocs(q);
      setTaskList(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    }
  }

  //function to delete task
  const deleteTask = async(id) => {
    const taskToDelete =  doc(taskCollection, id)
    await deleteDoc(taskToDelete).then(response=> {
      getTasks()
    }).catch((error)=> {
      alert(error.message)
    })
  }

  return (
    
      
          <Routes>
            <Route path='/' element={<LoginPage login={loginWithGoogle} loginWithEmail={loginWithEmail} setEmail={setEmail2} setPassword={setPassword2} />} />
            <Route path='/register' element={<SignupPage registerUserWithEmail={registerUserWithEmail} login={loginWithGoogle} setEmail={setEmail} setPassword={setPassword} setFullname={setFullname} />} />
            <Route path="/home" element={<HomePage user={user} logout={logOut} setTask={setTask} setPriority={setPriority} taskList={taskList} addTask={addTask} getTasks={getTasks} deleteTask={deleteTask} />} />
          </Routes> 
   
  );
}

export default App;
