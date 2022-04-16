import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5'>
           <section>
           <h1>1.What's the difference between Authorization and Authentication? </h1>
            <p>
            Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. 
            </p>
            </section>
           <section>
               <h1>2.Why are you using Firebase? What other options do you have to implement authentication?</h1>
               <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
           </section>
           <section>
               <h1>3. What other services does Firebase provide other than authentication?</h1>
               <p>There are many services which Firebase provides, Most useful of them are: Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
           </section>
        </div>
    );
};

export default Blogs;