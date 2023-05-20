import React from "react";
import Layout from "../components/Layout";
import CreatePost from "../components/posts/CreatePost";
function Home() {
 return (
   <Layout>
    <CreatePost />
   </Layout>
 );
}
export default Home;