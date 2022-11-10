import React from 'react';
import  {Helmet}from 'react-helmet'
function Blog(props) {
  return (
    <div className=' px-10'> <Helmet> <title> Minhaz  || Blog</title> </Helmet>
      <div className='Question'> 
      <span className=' text-green-500 text-3xl'> 1. Difference between SQL and NoSQL  </span> 
       <p className=' mt-5'><strong>SQL : </strong> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) . These databases have fixed or static or predefined schema. These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable <br /> <br /><strong> NoSQL : </strong>  Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage These databases are not so good for complex queries. 	Horizontally scalable</p>
       </div>  
       <div className=' grid grid-cols-2'> 
      <div className='Question mt-8'> 
        <span className=' text-green-500 text-3xl'> 2. What is JWT, and how does it work?  </span> 
        <p className=' mt-5 mb-10'><strong>JWT : </strong> JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
         <span className=' text-green-500 text-3xl '> 3. What is the difference between javascript and NodeJS?  </span> 

        <p className=' mt-5'><strong>JavaScript : </strong> Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js.
        
        
        <br /> <br /> <strong> Node js :</strong> Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. It may run on various operating systems, including Windows, Linux, and Mac OS. It provides a cross-platform runtime environment for developing highly scalable server-side JavaScript applications with event-driven, non-blocking (asynchronous) I/O.</p>

       </div>
       <div > <img className=' image-full mt-16' src="/img/Thesis-amico.png" alt="" /></div>

       </div>

       <div className='Question my-10'> 
      <span className=' text-green-500 text-3xl'> 4. How does NodeJS handle multiple requests at the same time? </span> 
       <p className=' mt-5'><strong>NodeJS : </strong> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
       </div>  


    </div>
  );
}

export default Blog;