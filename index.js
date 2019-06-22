import {mxFirebase} from './mx'
import './mx.css';
import './index.css';
import riot from "riot";
import "./tags/signin.tag";
import "./tags/homepage.tag";
import "./tags/signup.tag";
import "./tags/upload.tag"
import "./tags/itemdetail.tag";
import route from "riot-route";
import "./tags/homepage.tag"
import {checkAuth} from './mx'
import './mx.js'




var firebaseConfig = {
    apiKey: "AIzaSyCqTGbcKde1ez2rqCCw5ZzmMqZn5hblayY",
    authDomain: "nope11.firebaseapp.com",
    databaseURL: "https://nope11.firebaseio.com",
    projectId: "nope11",
    storageBucket: "nope11.appspot.com",
    messagingSenderId: "683310358968",
    appId: "1:683310358968:web:fbf8d85065452703"
};

mxFirebase.init(firebaseConfig);
// firebase.initializeApp(firebaseConfig)

route.base("/")

checkAuth().then((user)=>{
  navbar[0].opts.email = user.email;
  navbar[0].update();
  console.log(user.email);
}).catch(()=>{  
})

//SIGN IN//
route("/signin", () => {
  const signin = riot.mount("div#root", "signin");
  document.getElementById("signinform").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value
  try {
       await mxFirebase.signIn(email,password);
       // await firebase.auth().signInWithEmailAndPassword(email,password)
      window.location.href ="/home"
   }   
   catch(err){
     document.getElementById("errormessage").innerText= err.message
   }
}) ;

})
// SIGN UP//
route("/signup", () => {
  const signup = riot.mount("div#root", "signup");
  document.getElementById("signupform").addEventListener("submit", async (e)=>{
    e.preventDefault();
    const email= document.getElementById("email").value
    const password = document.getElementById("password").value
    const repassword = document.getElementById("repassword").value
    if (password==repassword) {
      try {
        await mxFirebase.signUp(email,password);
       // await firebase.auth().signInWithEmailAndPassword(email,password)
      window.location.href ="/home"
      }catch(err){
        document.getElementById("errormessage").innerText= err.message
      }
    }

}) ;

})
route("/upload", () =>{
  const upload = riot.mount("div#root", "upload");
  document.getElementById("uploadform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value
    // const emotion = document.querySelector('input[name=emotion]:checked').value
    const price = document.getElementById("price").value
    const description = document.getElementById("description").value
    const type = document.getElementById('type').value
    const age = document.getElementById('age').value
    const files = []
    document.querySelectorAll("input[type=file]").forEach(element => {
      if (element.files[0]) {
        files.push(element.files[0])
      }
    });
    console.log(title);
    console.log(description);
    console.log(age)
    console.log(type)
    const fileUrls = await mxFirebase.putFiles(files);
    console.log(fileUrls);
    const r = await mxFirebase.collection('products').save({
    title,
    fileUrls,
    price,
    age,
    description,
    type
    });
    console.log(r);
  })
})
  
route('/home..', async () => {

  const products = await mxFirebase.collection('products').getAll() // lay tat ca moi thu tu database
  const opts = {
      products: products, // dua tu JS den HTML
  }
  const homepage = riot.mount('div#root','homepage', opts) // de sau const opts
  const query = route.query()
  console.log(query)
  const filter = await mxFirebase.collection("products").paginate(1,100,query, '')
  if(query){
    console.log(filter)
  }

 
var slideIndex = 1;
showDivs(slideIndex);
document.getElementById('aa').addEventListener('click',()=>{
  showDivs(slideIndex -= 1)
})
document.getElementById('bb').addEventListener('click',()=>{
  showDivs(slideIndex += 1)
})
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
})
route('/itemdetail..', async()=>{
  const products = await mxFirebase.collection('products').getAll() // lay tat ca moi thu tu database
  const opts = {
      products: products, // dua tu JS den HTML
  }
  const itemdetail = riot.mount('div#root','itemdetail', opts) // de sau const opts
})
route.start(true);


